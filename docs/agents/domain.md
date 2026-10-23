# Domain docs

This repository uses a single context. Domain documentation lives at these repository-root paths:

- `GLOSSARY.md`: domain vocabulary and glossary.
- `docs/adr/`: architectural decision records.

## Before exploring

Read the relevant domain vocabulary in root `GLOSSARY.md` and ADRs in `docs/adr/` that touch the
area you will explore.

If these files are absent, proceed silently. Their absence does not block work or require
scaffolding. `/domain-modeling` creates documentation lazily as terms or decisions are resolved.

## Use the glossary's vocabulary

Use the terms defined in `GLOSSARY.md` when naming domain concepts in issue titles, refactor
proposals, hypotheses, and tests. Avoid synonyms the glossary explicitly rejects.

If a needed concept is missing, reconsider whether the project uses it. Note genuine vocabulary
gaps for `/domain-modeling`.

## Flag ADR conflicts

If a proposal or other output contradicts an existing ADR, identify the ADR and explain why its
decision should be reconsidered instead of silently overriding it.
