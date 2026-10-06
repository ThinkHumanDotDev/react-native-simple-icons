<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./assets/simple-icons-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="./assets/simple-icons.svg">
    <img src="./assets/simple-icons.svg" width="90" height="80" alt="Simple Icons">
  </picture>
</p>

<h1 align="center">React Native Simple Icons</h1>

<p align="center">
  <a href="https://simpleicons.org">Simple Icons</a> for React Native and Expo: 3,400+ brand and logo icons as typed SVG components, updated automatically with every <a href="https://www.npmjs.com/package/simple-icons">simple-icons</a> release.
</p>

<p align="center"><code>@thinkhuman/react-native-simple-icons</code></p>

<p align="center">
  <a href="https://www.npmjs.com/package/@thinkhuman/react-native-simple-icons"><img src="https://img.shields.io/npm/v/@thinkhuman/react-native-simple-icons.svg" alt="npm version"></a>
  <a href="https://github.com/ThinkHumanDotDev/react-native-simple-icons/actions/workflows/ci.yml"><img src="https://img.shields.io/github/actions/workflow/status/ThinkHumanDotDev/react-native-simple-icons/ci.yml?branch=main" alt="CI status"></a>
  <a href="https://github.com/ThinkHumanDotDev/react-native-simple-icons/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT license"></a>
</p>

## Installation

```sh
npm install @thinkhuman/react-native-simple-icons react-native-svg
```

Using Expo? Install `react-native-svg` with `npx expo install react-native-svg` so it matches your SDK.

## Usage

Find an icon on [simpleicons.org](https://simpleicons.org). Icons are exported as `Si` followed by the name run
together and the first letter capitalised, for instance:

- [`Material Design`](https://simpleicons.org/?q=material%20design) is `SiMaterialdesign`
- [`GitHub Actions`](https://simpleicons.org/?q=github%20actions) is `SiGithubactions`

## Basic example

```tsx
import { SiReact } from "@thinkhuman/react-native-simple-icons";

function BasicExample() {
  return <SiReact color="#61DAFB" size={24} />;
}
```

## Change title

Each icon has an accessibility label that defaults to the brand name.

```tsx
// title defaults to "React"
<SiReact title="My title" size={24} />
```

## Use default color

Set `color` to `default` to use the brand color.

```tsx
<SiReact color="default" size={24} />
```

### Use default color as hex

Append `Hex` to the icon name to get the brand color as a hex string (without the `#`).

```tsx
import { SiReact, SiReactHex } from "@thinkhuman/react-native-simple-icons";

<SiReact color={`#${SiReactHex}`} size={24} />;
```

## Versioning

Versions match the [simple-icons](https://github.com/simple-icons/simple-icons/releases) release they are built
from, and new releases are picked up automatically. Missing or outdated icons are fixed
[upstream](https://github.com/simple-icons/simple-icons).

## License

MIT. Icon data comes from simple-icons (CC0-1.0); brand names and trademarks belong to their owners. Contributions
are welcome, see [CONTRIBUTING.md](CONTRIBUTING.md).
