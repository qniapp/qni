# Qni follow-up refactor proposals design

## Goal

今回のリファクタリング指示書で **実装禁止 / 提案のみ** とされた負債について、既存挙動を壊さずに将来進めるための設計案をまとめる。

この文書は実装計画ではなく、次に別 lane として着手するときの判断材料である。特に `apps/www/public/serviceworker.js` は既存 spec `2026-04-18-apps-www-pwa-public-assets-design.md` の通り committed source-of-truth の凍結 worker として扱い、この提案内では編集・再生成しない。

## Non-goals

- 本文書の作成と同時に実装へ進むこと
- `/serviceworker.js` の公開 URL、worker message protocol、回路 JSON serialization を変えること
- `apps/tutorial/`、`html/`、`apps/www/public/serviceworker.js{,.map}` を変更すること
- DB schema、CI、Dockerfile、デプロイ設定を同じ lane で変更すること

## Proposal 1: worker source unification (D8)

### Current problem

- `apps/www/public/serviceworker.js` は凍結済みの public worker bundle で、通常 build では再生成されない。
- `apps/tutorial/src/serviceworker.js` は tutorial build から生成される。
- どちらも `packages/elements/src/quantum-simulator-element.ts` と同じ worker message protocol に依存するが、source-of-truth が分かれている。

### Recommended direction

別 lane で、worker の「authoring source」と「published artifact」を分離して明文化する。

候補:

1. `packages/elements` または新しい internal package に worker source を置く。
2. www / tutorial が同一 source から bundle を作れる dedicated script を用意する。
3. www はいきなり通常 build に混ぜず、`apps/www/public/serviceworker.js` を更新する専用 refresh command と checksum / diff review を用意する。

### Required compatibility

- URL は `/serviceworker.js` のまま。
- request message:
  `{circuitJson, qubitCount, stepIndex, steps, targets, invalidateCaches}`
- response message:
  `{type:'step', step, amplitudes, blochVectors, measuredBits, flags}` / `{type:'finish'}`
- `packages/elements` だけ更新したときに凍結 www worker と protocol mismatch しないこと。

### Verification

- `pnpm --dir packages/elements test`
- `pnpm test:ci`
- www system tests: `circuit_page_test.rb`, `circle_notation_test.rb`, gate tests touching simulation output
- tutorial build diff review: `apps/tutorial/serviceworker.js`, maps, and `html/` generated diff must be expected and reviewed
- production-like smoke: existing bookmarked circuit URL renders and simulation completes

### Rollback

- Keep the previous committed `apps/www/public/serviceworker.js{,.map}` artifact.
- If worker refresh regresses, revert only the generated artifact commit and leave source refactor disabled.

## Proposal 2: replace `complex.js` in `qubit-circle-element` (D11)

### Current problem

`packages/elements/src/qubit-circle-element.ts` uses third-party `complex.js`, while the rest of the monorepo exposes and uses `@qni/common` `Complex`.

### API correspondence

| `complex.js` usage                  | Candidate `@qni/common` equivalent                             | Notes                                           |
| ----------------------------------- | -------------------------------------------------------------- | ----------------------------------------------- |
| construction from `{re, im}` / pair | `new Complex(real, imaginary)` or existing constructor/factory | Confirm exact constructor shape before changing |
| magnitude / absolute value          | `Complex` magnitude API                                        | Preserve rounding used by circle notation       |
| phase / argument                    | `Complex` phase API or helper                                  | Sign and zero handling must be pinned by tests  |
| arithmetic if present               | `Complex` methods                                              | Avoid changing display formatting at same time  |

### Required tests before implementation

- Add WTR tests for `qubit-circle-element` rendering from representative amplitudes:
  - `0`
  - `1`
  - `1/√2 + i/√2`
  - negative real / imaginary quadrants
- Add or reuse www system assertions around circle notation magnitudes and phases.

### Verification

- `pnpm --dir packages/elements test`
- `pnpm size` (expect `elements` bundle to shrink if `complex.js` becomes unused)
- www system tests: `circle_notation_test.rb`, `circle_notation_panel` related coverage if added

## Proposal 3: split the three largest elements files (D12)

### Current problem

`quantum-circuit-element.ts`, `circuit-step-element.ts`, and `circle-notation-element.ts` combine DOM construction, xstate machines, circuit DSL/serialization, and rendering concerns in very large files.

### Suggested boundaries

#### `quantum-circuit-element.ts`

- Keep public custom element class and Catalyst controller in the original file.
- Extract private modules by responsibility:
  - circuit JSON parsing / serialization helpers
  - drag/drop coordination helpers
  - step / wire collection utilities
  - state machine definition, if it can be exported without public API leakage

#### `circuit-step-element.ts`

- Keep `CircuitStepElement` class and tag name unchanged.
- Extract:
  - operation placement rules
  - control / target validation helpers
  - serialization helpers
  - DOM query helpers for child operations

#### `circle-notation-element.ts`

- Keep public class unchanged.
- Extract:
  - amplitude-to-display model conversion
  - layout math
  - SVG / DOM rendering helpers
  - mode-specific formatting

### Required pre-tests

- Serialization round-trip tests for circuits with controls, swaps, QFT, angle gates, measurement, and write gates.
- Drag/drop operation placement system tests or WTR coverage before moving placement logic.
- Circle notation numerical display tests for magnitudes and phases before touching rendering math.

### Rollout strategy

- 1 commit per extracted private helper module.
- After each extraction, run `pnpm --dir packages/elements test`.
- After each file family, run relevant www system tests.
- Do not combine extraction with behavior cleanup.

## Proposal 4: toolchain single-source and Docker correction (D13)

### Current problem

Node / Ruby / pnpm / Bundler versions are pinned across `.tool-versions`, `.node-version`, `.ruby-version`, app-level Ruby files, CI, scripts, and Dockerfile. The Dockerfile also uses a broader Node 20.x install path than the exact local/CI version.

### Recommended direction

- Treat `.tool-versions` as the human-readable canonical source.
- Keep `scripts/check-local-build-env.mjs` as the enforcement tool, not as debt to delete.
- Add a small generator/checker that verifies derived version files and CI snippets from `.tool-versions`.
- Update Dockerfile in a separate infra lane:
  - pin Node to `20.20.2`
  - confirm Ruby `4.0.2`
  - evaluate newer base image
  - keep Heroku behavior out of scope unless explicitly tested

### Verification

- `node scripts/check-local-build-env.mjs`
- CI dry-run or equivalent local script check
- Docker build + smoke commands in container:
  - `node -v`
  - `ruby -v`
  - `pnpm -v`
  - `pnpm test:ci` if practical

## Proposal 5: asynchronous Grover social image generation (D14)

### Current problem

`CircuitsController#show` synchronously calls `Circuit#attach_social_image`, which can launch Puppeteer/Grover in the request path. Failures are best-effort and already soft-fail, but latency and worker occupancy remain risks.

### Options

#### Option A: keep synchronous generation but add observability

- Lowest behavior risk.
- Add structured timing logs and maybe request-level metrics.
- Does not solve latency.

#### Option B: Active Job with existing adapter first

- Move generation to `AttachSocialImageJob`.
- First response returns without image; later requests can include it.
- Needs queue adapter decision for Heroku.

#### Option C: dedicated background worker / external queue

- Best production isolation.
- Highest infra and deployment scope.
- Requires Heroku process / add-on decisions.

### Recommended first lane

Start with Option A or a very small Option B design doc. Before changing runtime behavior, add request/system tests that pin:

- page returns 200 even when generation fails
- existing `og:image` behavior when attachment exists
- initial request behavior when no attachment exists

### Verification

- `pnpm --dir apps/www test:ci`
- relevant request tests for `circuits#show`
- Grover runtime config tests
- production-like smoke with `GROVER_ENABLED_IN_TEST=1` only in a controlled environment

## Cross-proposal sequencing

1. Add tests around the exact behavior to be moved.
2. Move private helpers only; do not change public contracts in the same commit.
3. For worker and Grover lanes, write a separate rollout / rollback checklist before implementation.
4. Keep tutorial-generated artifacts and www frozen worker out of incidental refactors.
