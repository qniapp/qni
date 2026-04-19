# Vendored browser assets for `apps/www/docs`

Purpose: remove unpkg runtime dependencies without changing the effective browser-side asset versions used in this lane.

## Provenance

- `tailwindcss@2.2.19` -> `package/dist/tailwind.min.css` -> `tailwindcss/tailwind.min.css`
- `@highlightjs/cdn-assets@11.2.0` -> `package/highlight.min.js` -> `highlightjs/highlight.min.js`
- `@highlightjs/cdn-assets@11.2.0` -> `package/styles/atom-one-dark.min.css` -> `highlightjs/styles/atom-one-dark.min.css`

## Refresh procedure

These files were fetched from the npm registry via `npm pack` and copied verbatim from the extracted tarballs. Keep them byte-identical to the upstream runtime assets unless intentionally updating the pinned versions above.
