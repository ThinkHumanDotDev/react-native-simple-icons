import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as simpleIcons from "simple-icons";
import { isIcon, writeGeneratedPackage } from "./icon-utils";

const require = createRequire(import.meta.url);
const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = path.join(rootDir, "src");

const icons = Object.values(simpleIcons).filter(isIcon);
const simpleIconsVersion = await readPackageVersion("simple-icons");

const manifest = await writeGeneratedPackage({
  icons,
  simpleIconsVersion,
  srcDir,
  rootDir,
});

console.log(`Generated ${manifest.count} icons from simple-icons v${manifest.simpleIconsVersion}`);

async function readPackageVersion(packageName: string): Promise<string> {
  let dir = path.dirname(require.resolve(packageName));

  while (dir !== path.dirname(dir)) {
    const packageJsonPath = path.join(dir, "package.json");

    try {
      const packageJson = JSON.parse(await readFile(packageJsonPath, "utf8")) as {
        name?: string;
        version?: string;
      };

      if (packageJson.name === packageName && packageJson.version) {
        return packageJson.version;
      }
    } catch {
      // Keep walking toward the package root.
    }

    dir = path.dirname(dir);
  }

  throw new Error(`Could not find ${packageName} package.json`);
}
