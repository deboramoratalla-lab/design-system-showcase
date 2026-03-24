# AI Playbook for This Design System

This is a practical rollout of the ideas from "20 ways to use AI this year for design" adapted to this repository.

## Goals

- Ship components and docs faster without lowering quality.
- Keep design-token consistency across stories and components.
- Reduce manual review work with automated checks.

## 30-Day Rollout

1. Week 1: Prompt and workflow standardization
- Use the prompt library in `docs/ai/prompt-library.md`.
- Require AI-generated PRs to follow `docs/ai/review-checklist.md`.

2. Week 2: Documentation acceleration
- Generate one migration guide per component change.
- Generate onboarding FAQ entries from real PR review comments.

3. Week 3: Quality automation
- Add AI-assisted story QA runs (a11y, visual diffs, token usage checks).
- Use Chromatic regularly (`npm run chromatic`).

4. Week 4: Team adoption
- Track metrics: lead time, review iterations, and escaped UI defects.
- Keep only workflows that show measurable improvement.

## Priority Use Cases for This Repo

1. Design-to-story translation using strict token constraints.
2. Auto-drafting component docs (usage, variants, do/don't).
3. Migration guide generation for breaking prop/style changes.
4. Storybook coverage suggestions (missing edge states).
5. PR risk scanning for design-system regressions.

## Success Metrics

- Story delivery time reduced by at least 25%.
- First-pass PR approval rate up by at least 20%.
- Chromatic regressions caught before merge.
- Fewer repeated onboarding questions.

