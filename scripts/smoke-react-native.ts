import { execFileSync } from "node:child_process";
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const tmpDir = path.join(rootDir, ".tmp", "react-native-smoke");
const entryFile = path.join(tmpDir, "App.tsx");
const bundleFile = path.join(tmpDir, "bundle.js");
const assetsDir = path.join(tmpDir, "assets");
const configFile = path.join(tmpDir, "metro.config.cjs");
const packageDir = path.join(
  tmpDir,
  "node_modules",
  "@thinkhuman",
  "react-native-simple-icons",
);

await rm(tmpDir, { force: true, recursive: true });
await mkdir(assetsDir, { recursive: true });
await mkdir(packageDir, { recursive: true });
await cp(path.join(rootDir, "dist"), path.join(packageDir, "dist"), { recursive: true });
await mkdir(path.join(packageDir, "src"), { recursive: true });
await cp(
  path.join(rootDir, "src", "simple-icons-manifest.json"),
  path.join(packageDir, "src", "simple-icons-manifest.json"),
);
await writeFile(
  path.join(packageDir, "package.json"),
  JSON.stringify(smokePackageJson(await readPackageJson()), null, 2),
);
await writeFile(
  entryFile,
  `import * as React from "react";
import { View } from "react-native";
import { SiGithub, SiReact } from "@thinkhuman/react-native-simple-icons";

export default function App() {
  return (
    <View>
      <SiReact size={32} color="default" />
      <SiGithub size={24} color="#000" accessibilityLabel="GitHub" />
    </View>
  );
}
`,
);
await writeFile(
  configFile,
  `const path = require("node:path");
const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");

const root = ${JSON.stringify(rootDir)};
const fixture = __dirname;

module.exports = mergeConfig(getDefaultConfig(fixture), {
  projectRoot: fixture,
  watchFolders: [path.join(root, "node_modules")],
  resolver: {
    nodeModulesPaths: [
      path.join(fixture, "node_modules"),
      path.join(root, "node_modules"),
    ],
    extraNodeModules: {
      react: path.join(root, "node_modules", "react"),
      "react-native": path.join(root, "node_modules", "react-native"),
      "react-native-svg": path.join(root, "node_modules", "react-native-svg"),
    },
  },
});
`,
);

try {
  execFileSync(
    "bunx",
    [
      "react-native",
      "bundle",
      "--platform",
      "ios",
      "--dev",
      "false",
      "--entry-file",
      entryFile,
      "--config",
      configFile,
      "--bundle-output",
      bundleFile,
      "--assets-dest",
      assetsDir,
      "--reset-cache",
      "--max-workers",
      "2",
    ],
    {
      cwd: rootDir,
      env: {
        ...process.env,
        CI: "1",
      },
      stdio: "inherit",
    },
  );
} finally {
  await rm(tmpDir, { force: true, recursive: true });
}

async function readPackageJson(): Promise<Record<string, unknown>> {
  return JSON.parse(await readFile(path.join(rootDir, "package.json"), "utf8")) as Record<
    string,
    unknown
  >;
}

function smokePackageJson(packageJson: Record<string, unknown>): Record<string, unknown> {
  return {
    name: packageJson.name,
    version: packageJson.version,
    type: packageJson.type,
    main: packageJson.main,
    module: packageJson.module,
    types: packageJson.types,
    "react-native": packageJson["react-native"],
    exports: packageJson.exports,
    sideEffects: packageJson.sideEffects,
    peerDependencies: packageJson.peerDependencies,
  };
}
