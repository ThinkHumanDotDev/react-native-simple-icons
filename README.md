<p align="center">
  <img src="./assets/simple-icons.svg" width="90" height="80" alt="Simple Icons">
</p>

<h1 align="center">@thinkhuman/react-native-simple-icons</h1>

<p align="center">
  React Native icon components generated from the upstream <a href="https://www.npmjs.com/package/simple-icons">simple-icons</a> package.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@thinkhuman/react-native-simple-icons"><img src="https://img.shields.io/npm/v/@thinkhuman/react-native-simple-icons.svg" alt="npm version"></a>
  <a href="https://github.com/ThinkHumanDotDev/react-native-simple-icons/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/ThinkHumanDotDev/react-native-simple-icons/ci.yml?branch=main" alt="CI status"></a>
  <a href="https://github.com/ThinkHumanDotDev/react-native-simple-icons/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT license"></a>
</p>

## Installation

```sh
npm install @thinkhuman/react-native-simple-icons react-native-svg
```

## Usage

```tsx
import { SiReact } from "@thinkhuman/react-native-simple-icons";

export function Example() {
  return <SiReact size={32} color="default" />;
}
```

```tsx
import { SiGithub } from "@thinkhuman/react-native-simple-icons";

export function Example() {
  return <SiGithub size={24} color="#000" accessibilityLabel="GitHub" />;
}
```

Each icon exports its component and metadata:

```tsx
import { SiReact, SiReactHex, SiReactSlug, SiReactTitle } from "@thinkhuman/react-native-simple-icons";
```

`color="default"` uses the brand color from `simple-icons`. The regular color default is `"black"` because React Native support for `"currentColor"` is not consistent across targets.

## API

```ts
import type { SvgProps } from "react-native-svg";

export type IconProps = Omit<SvgProps, "color"> & {
  size?: number | string;
  color?: string | "default";
  title?: string;
};
```

Icons render with `viewBox="0 0 24 24"`. Remaining props are passed to `Svg`.

## Generation

Generate icons with:

```sh
bun run generate:icons
```

The generator imports all icon data from `simple-icons`, writes `src/icons`, writes `src/index.ts`, and records the processed version plus per-icon hashes in `src/simple-icons-manifest.json`.

Generated output is deterministic. Running the generator twice with the same `simple-icons` version should not change files.

## Validation

Run the full local check with:

```sh
bun run validate
```

CI runs the generator, checks `git diff --exit-code`, then runs typecheck, tests, and build.

## Versioning

The npm package version matches the processed `simple-icons` version (for example `16.19.0`). `bun run generate:icons` updates `package.json` and `src/simple-icons-manifest.json` together, so icon updates and the publishable version stay aligned.

## Updates

`.github/workflows/update-icons.yml` runs every 3 days and can be started manually. It updates `simple-icons`, regenerates icons, classifies the changes, runs validation, and opens a PR when files changed.

The update PR body includes the previous and new processed versions, added icons, removed icons, changed icons, suggested release type, and detected breaking changes.

## Expanding on this project

Install dependencies with:

```sh
bun install
```

Use Bun for local development. The package is ESM-only and builds with `tsc` through `scripts/build-package.ts`.

The following files are generated:

- `src/icons` contains one generated component per icon.
- `src/index.ts` contains generated named exports.
- `src/simple-icons-manifest.json` records the processed `simple-icons` version, component API hash, icon names, and per-icon hashes.

`dist` is the build output and should not be committed.

Common commands:

```sh
bun run generate:icons
bun run classify:changes
bun run typecheck
bun run build
bun run smoke:react-native
bun run test
bun run validate
```

`bun run smoke:react-native` builds the package, creates a temporary React Native fixture, imports the package through Metro, and bundles it. This catches package export and React Native resolution problems that a plain Node import cannot catch.

To test the packed package in an app:

```sh
bun run validate
npm pack
```

Install the generated `.tgz` file into a fresh Expo or React Native app, then test both root imports and per-icon imports:

```tsx
import { SiReact } from "@thinkhuman/react-native-simple-icons";
import { SiYoutube } from "@thinkhuman/react-native-simple-icons/icons/SiYoutube";
```

Before publishing locally, run:

```sh
bun run validate
npm pack --dry-run
```

`prepublishOnly` runs the same validation and dry-run pack check when you `npm publish` from your machine. The package publishes only `dist`, the manifest, README, license, notice, and package metadata.

### Automated publish (GitHub Actions)

Pushes to `main` on the upstream repo run [`.github/workflows/publish.yml`](.github/workflows/publish.yml) when `package.json` has a version that is not already on npm. Merging an icon update (or running `generate:icons` after bumping `simple-icons`) sets the version automatically; CI validates and publishes.

Forks cannot trigger a publish: the workflow checks `github.repository`, only runs on `push` to `main` (never on `pull_request` / `pull_request_target`), and does not use shared Actions caches.

**One-time setup** uses [npm Trusted Publishers](https://docs.npmjs.com/trusted-publishers) (OIDC). No `NPM_TOKEN` secret is stored in GitHub.

1. On [npm](https://www.npmjs.com/package/@thinkhuman/react-native-simple-icons) → **Settings** → **Publishing access** → **Add Trusted Publisher**:
   - Publisher: **GitHub Actions**
   - Organization or user: `ThinkHumanDotDev`
   - Repository: `react-native-simple-icons`
   - Workflow filename: `publish.yml`
   - Environment name: `npm`
2. On GitHub → **Settings → Environments** → **`npm`** (you already created this). Optionally add required reviewers or limit deployments to the `main` branch.
3. Push this repository to GitHub so the trusted publisher can match the workflow run.

The publish job uses `environment: npm` and `id-token: write`; `actions/setup-node` exchanges the OIDC token with npm at publish time.

You can also run the workflow manually from the Actions tab (`workflow_dispatch`).

When `simple-icons` releases a new version, use the update workflow or run the same steps locally:

```sh
bun add --dev --exact simple-icons@latest
bun run generate:icons
bun run classify:changes --markdown .github/update-summary.md --json .github/update-summary.json
bun run validate
```

Commit generated icon updates separately from tooling or documentation changes when possible. A typical update commit only changes `bun.lock`, `package.json`, `src/icons`, `src/index.ts`, and `src/simple-icons-manifest.json`.

## License

This package is MIT licensed. Icon data is generated from `simple-icons`, which is CC0-1.0.
