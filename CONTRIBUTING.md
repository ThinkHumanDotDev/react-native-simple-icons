# Contributing to @thinkhuman/react-native-simple-icons

Thanks for helping! Issues and pull requests are the unit of work. The [README](README.md) covers using the
package; this page covers developing and releasing it. By participating you agree to the
[Code of Conduct](CODE_OF_CONDUCT.md).

## Icons come from simple-icons

Every component is generated from the [`simple-icons`](https://github.com/simple-icons/simple-icons) package.
A missing icon, wrong artwork, brand color or title is fixed **upstream**; the
[update workflow](.github/workflows/update-icons.yml) picks it up within a few days and opens a PR here.
Issues and PRs that edit generated icons by hand will be closed.

## Workflow

1. **Open or pick an issue first.** Features without an approved issue may be closed; small fixes and docs
   corrections do not need one. Use the issue templates (bug report, feature request).
2. Branch from `main` using a plain name: `feat/<slug>`, `fix/<slug>`, `chore/<slug>`, `docs/<slug>`,
   `ci/<slug>`.
3. Keep PRs focused: one issue per PR, referenced with `Closes #NN`. Keep generated icon updates out of
   tooling or documentation PRs.
4. Run `bun run validate` before pushing. CI regenerates the icons and fails on any diff, then runs
   typecheck, build, the React Native (Metro) smoke bundle and the tests. A red check is yours to fix;
   never skip or disable a test to get green.
5. Fill in the pull request template (summary, how it was tested, checklist).
6. PRs are squash-merged; the PR title becomes the commit subject and must follow Conventional Commits
   (a CI check enforces it).

## Local setup

```sh
bun install
bun run validate
```

Use Bun (version in `package.json` → `packageManager`) and Node 24, the versions CI runs.

| Command                      | What it does                                                                                       |
| ---------------------------- | -------------------------------------------------------------------------------------------------- |
| `bun run generate:icons`     | Writes `src/icons`, `src/index.ts` and `src/simple-icons-manifest.json` from the installed `simple-icons`, and sets the package version to match. |
| `bun run typecheck`          | TypeScript check.                                                                                  |
| `bun run build`              | Builds `dist` (not committed).                                                                     |
| `bun run smoke:react-native` | Bundles the built package in a fresh React Native fixture through Metro, catching export and resolution problems a Node import misses. |
| `bun run test`               | Vitest.                                                                                            |
| `bun run validate`           | All of the above, in order.                                                                        |
| `bun run classify:changes`   | Summarises added, removed and changed icons between two manifests.                                 |

To try the package in an app, run `npm pack` after `bun run validate` and install the `.tgz` into a fresh Expo or
React Native project; check both root imports and `/icons/<Name>` imports.

## Commit messages and PR titles

[Conventional Commits](https://www.conventionalcommits.org): `type(scope): subject`.

- Types: `feat`, `fix`, `chore`, `docs`, `test`, `refactor`, `ci`, `build`, `perf`.
- Subject in the imperative, no trailing period. Keep the body for the _why_.
- Breaking changes to the component API (`IconProps`, export names, package `exports`) need a `!` after the
  type and a note in the PR body.

## Code conventions

- TypeScript strict, ESM only. The package must keep working with Metro: `bun run smoke:react-native`
  bundles it in a fresh React Native fixture.
- Generated files are `src/icons/*`, `src/index.ts` and `src/simple-icons-manifest.json`. Change the
  generator in `scripts/` instead of editing them, then run `bun run generate:icons` and commit the output.
  Generation must stay deterministic: running it twice must not change any file.
- Don't bump the version by hand. It follows the processed `simple-icons` version and is set by the
  generator; publishing happens automatically when a new version lands on `main`.
- Tests: Vitest in `tests/` for behaviour that matters (generator output, change classification, icon
  utilities). No snapshot tests of every icon.

## Releases (maintainers)

Releases are automated; nothing is published by hand.

- **Icon updates.** [`update-icons.yml`](.github/workflows/update-icons.yml) runs every 3 days (or manually),
  updates `simple-icons` to the latest release, regenerates, validates and opens a PR whose body summarises the
  icon changes. It needs the `UPDATE_ICONS_TOKEN` secret described below.
- **Publishing.** [`publish.yml`](.github/workflows/publish.yml) runs on every push to `main`. When the
  `package.json` version is not on npm yet, it validates, publishes with provenance and creates a `v<version>`
  GitHub release with icon change notes. Forks cannot publish: the workflow checks `github.repository` and never
  runs on pull requests.
- **Backfill.** The package mirrors every `simple-icons` release 1:1, but the update workflow jumps straight to
  the newest one. After each publish, the same workflow publishes any skipped upstream version (from the first
  version on npm up to `main`) with the `backfill` dist-tag so `latest` never moves backwards, plus a tag and a
  GitHub release not marked as latest. Versions are queued oldest first and run one at a time, but GitHub does
  not guarantee matrix jobs run in the order they are queued. Run it manually with `backfill_from` (e.g.
  `16.0.0`) to start earlier.

Publishing uses [npm Trusted Publishing](https://docs.npmjs.com/trusted-publishers) (OIDC); there is no
`NPM_TOKEN` secret. The trusted publisher on npm must match GitHub Actions, `ThinkHumanDotDev/react-native-simple-icons`,
workflow `publish.yml` and environment `npm`; renaming the workflow file or the environment breaks publishing
until npm is updated.

## Branch protection (maintainers)

`main` is protected by the repository ruleset in [`.github/rulesets/main.json`](.github/rulesets/main.json):

- changes land through pull requests only, squash-merged, with linear history;
- the `validate` and `Conventional PR title` checks must pass on a branch that is up to date with `main`;
- review threads must be resolved, and approvals are dismissed when new commits are pushed;
- force pushes and deleting `main` are blocked;
- repository admins may bypass the rules on a pull request (for example an urgent fix), never by pushing
  directly.

Apply or update it under **Settings → Rules → Rulesets → New ruleset → Import a ruleset** with that file, or
with the GitHub CLI:

```sh
# create
gh api --method POST repos/ThinkHumanDotDev/react-native-simple-icons/rulesets --input .github/rulesets/main.json
# update (find the id with: gh api repos/ThinkHumanDotDev/react-native-simple-icons/rulesets)
gh api --method PUT repos/ThinkHumanDotDev/react-native-simple-icons/rulesets/<id> --input .github/rulesets/main.json
```

Check names in the ruleset must match the job `name:` fields in [`ci.yml`](.github/workflows/ci.yml) and
[`pr-title.yml`](.github/workflows/pr-title.yml); rename them together. Under **Settings → General → Pull Requests**, allow squash merging only, default the commit
message to the PR title, and enable automatic deletion of head branches.

Pull requests opened with the default `GITHUB_TOKEN` do not trigger other workflows, so the automated icon
update PR would never get its required checks. Add an `UPDATE_ICONS_TOKEN` repository secret (a
fine-grained token or GitHub App token with contents and pull request write access to this repository);
the update workflow uses it when present.

## Licensing

By contributing you agree that your contributions are licensed under the [MIT license](LICENSE).
