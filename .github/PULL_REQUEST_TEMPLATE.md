## Summary

<!-- What does this change and why? Keep the PR to one issue. -->

Closes #

## How it was tested

<!-- Commands run, platforms checked (iOS / Android / web), screenshots for visual changes. -->

## Checklist

- [ ] The PR title follows Conventional Commits (`type(scope): subject`); it becomes the squash commit
- [ ] `bun run validate` passes locally (generate, typecheck, build, React Native smoke bundle, tests)
- [ ] `bun run generate:icons` leaves no diff (generated files are committed and not edited by hand)
- [ ] Generator or component changes: tests updated in `tests/`
- [ ] README (usage) or CONTRIBUTING (development, releases) updated when the API, scripts or workflows changed
- [ ] No hand-made version bump: the package version follows the processed `simple-icons` version
