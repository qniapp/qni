# Qni

Welcome to the [Qni](https://qniapp.net) repository. Qni is a quantum computer simulator that runs in your browser.

Qni is largely inspired by Craig Gidney's [Quirk](https://github.com/Strilanc/Quirk), a pioneer in quantum circuit simulators. Qni inherits Quirk's features, such as live programming of quantum circuits and circuit bookmarks, and extends them based on modern web technologies such as CSS responsive design and Web Components standards. This makes it possible to enjoy quantum circuit programming on smartphones and embed "live" quantum circuits in any web page.

## Contents

This repository is a monorepo containing three packages:

- [**packages/common**](https://github.com/qniapp/qni/tree/main/packages/common) contains the source for the [@qni/common](https://www.npmjs.com/package/@qni/common) package. This is a common library used by other Qni packages.
- [**packages/simulator**](https://github.com/qniapp/qni/tree/main/packages/simulator) contains the source for the [@qni/simulator](https://www.npmjs.com/package/@qni/simulator) package. This is a quantum computer simulator implementation in TypeScript. It is usually called by the browser's ServiceWorker thread and runs asynchronously.
- [**packages/elements**](https://github.com/qniapp/qni/tree/main/packages/elements) contains the source for the [@qni/elements](https://www.npmjs.com/package/@qni/elements) package. This is a custom web component library for rendering quantum circuits. It is used by `@qni/www` as well as several other projects.

And two apps:

- [**apps/www**](https://github.com/qniapp/qni/tree/main/apps/www) contains the source for the [qniapp.net](https://qniapp.net) website.
- [**apps/tutorial**](https://github.com/qniapp/qni/tree/main/apps/tutorial) contains the source for the [qniapp.github.io/qni](https://qniapp.github.io/qni/) website.

And two supporting directories at the repository root:

- [**html**](https://github.com/qniapp/qni/tree/main/html) contains the generated static site artifact for the GitHub Pages deployment of the tutorial site.
- [**docs**](https://github.com/qniapp/qni/tree/main/docs) contains agent-facing Markdown docs such as specs and implementation plans.

And one example:

- [**examples/elements-example**](https://github.com/qniapp/qni/tree/main/examples/elements-example) is a simple example for `@qni/elements`.

## Local setup

This repository is being migrated toward the following toolchain baseline:

- Node.js `20.20.2`
- Ruby `4.0.2`
- pnpm `10.33.0`

If you use [mise](https://mise.jdx.dev/), the repository root now pins those versions for local work. The production Heroku app `qni-quantum` deploys the Rails app from `apps/www`, and the repository-wide Ruby version policy is being aligned with that production target. The monorepo now uses pnpm for workspace installs and root orchestration, and Lerna is being removed in favor of native pnpm scripts.

Bootstrap the local toolchain with:

```bash
./scripts/install-local-build-env.sh
```

Run the local full build with:

```bash
./scripts/full-build-local.sh
```

## Getting Help & Contributing Back

Find a bug? Head over to our [issue tracker](https://github.com/qniapp/qni/issues) and we'll do our best to help. We love pull requests, too!

## License

Qni is [MIT-licensed](LICENSE) open-source software from [TIS Inc.](https://www.tis.co.jp/)

---

© 2022 TIS Inc.
