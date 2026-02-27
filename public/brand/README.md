# Brand assets (TAP)

This folder is split into two layers:

- `public/brand/*.svg`: curated assets consumed by Storybook stories.
- `public/brand/raw/**`: raw export imported from Figma (`assets.zip`), preserved as source of truth.

## Current decision

We keep Storybook using curated files so visual pages remain stable and ordered.
Raw files are kept intact for traceability and future updates.

## Storybook mapping (current)

- `01-portada.svg` -> cover page
- `02-logo-black.svg` -> logo section (light background usage)
- `02-logo-white.svg` -> logo section (dark background usage)
- `02-logo-color.svg` -> logo section (blue background usage)
- `02-logo-inspiration.svg` -> logo inspiration page
- `03-wordmark.svg` -> wordmark main page
- `03-wordmark-variants.svg` -> wordmark variants
- `04-colors-primary-secondary.svg` -> primary and neutral palette
- `04-colors-highlight.svg` -> highlight color scales
- `05-typography-gustavo-01.svg` -> typography intro (Gustavo)
- `05-typography-gustavo-02.svg` -> typography weights (Gustavo)
- `05-typography-surt-01.svg` -> typography intro (Surt)
- `05-typography-surt-02.svg` -> typography weights (Surt)
- `06-iconography.svg` -> iconography page
- `07-photography-1.svg` -> photography page 1
- `07-photography-2.svg` -> photography page 2

## Update workflow (when new Figma export arrives)

1. Replace `public/brand/raw/**` with the new ZIP export contents.
2. Compare target pages against current curated files in `public/brand/*.svg`.
3. Update curated files only when layout and crop are validated in Storybook.
4. Keep file names stable to avoid breaking story references.
