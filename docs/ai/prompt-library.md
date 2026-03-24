# Prompt Library

Copy and adapt these prompts for this project.

## 1) Build a Storybook Component from Requirements

```text
You are working in a React + Storybook + design-tokens repo.
Create or update component [COMPONENT_NAME] with:
- strict token usage from design-tokens/tokens.json
- stories for primary, secondary, disabled, and edge states
- docs-first API with clear props and defaults
Do not invent token names. Reuse existing project patterns.
Return:
1) files changed
2) implementation notes
3) tests/checks to run
```

## 2) Generate a Migration Guide

```text
Given this diff and changed API surface, create a migration guide:
- what changed
- why it changed
- before/after code
- common pitfalls
- rollback strategy
Format as docs markdown for design-system consumers.
```

## 3) Token Consistency Audit

```text
Audit these files for raw colors, spacing, and typography values.
Flag anything not mapped to design tokens.
Return:
- file and line
- issue severity
- suggested token replacement
```

## 4) Storybook Coverage Gap Finder

```text
Inspect existing stories for [COMPONENT_NAME].
Identify missing states and interactions:
- loading
- error
- long text
- high contrast
- keyboard focus
Return a prioritized list and story names to add.
```

## 5) PR Risk Review for Design-System Changes

```text
Review this PR as a design-system maintainer.
Focus on:
- behavioral regressions
- accessibility risks
- token drift
- docs mismatch
- migration impact
Return findings sorted by severity with file references.
```

