# AI-Assisted PR Checklist

Use this before merging AI-generated or AI-assisted changes.

## Design System Integrity

- All colors, spacing, radius, and typography use tokens.
- No hardcoded visual values unless explicitly justified.
- Component variants match design language and naming.

## Storybook Quality

- Stories exist for default, disabled, and edge states.
- Interactive stories expose meaningful controls.
- Docs are updated when API/behavior changes.

## Accessibility

- Keyboard navigation works.
- Focus styles are visible and token-driven.
- Contrast is acceptable for text and actions.

## Regression Risk

- Chromatic build reviewed for visual diffs.
- Breaking changes have migration notes.
- Risky behavior changes include test coverage or manual test steps.

## Handoff

- Changelog entry added when needed.
- Consumer-facing examples are up to date.
- Follow-up tasks documented for anything deferred.

