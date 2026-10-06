import { execFileSync } from "node:child_process";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { compareVersions, isReleaseVersion } from "./backfill-utils";
import { classifyChanges, renderMarkdownSummary } from "./classify-utils";
import type { Manifest } from "./icon-utils";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputPath = process.argv[2];

const packageJson = JSON.parse(
  await readFile(path.join(rootDir, "package.json"), "utf8"),
) as { version: string };
const current = JSON.parse(
  await readFile(path.join(rootDir, "src/simple-icons-manifest.json"), "utf8"),
) as Manifest;
const previous = await readPreviousManifest(packageJson.version);
const summary = classifyChanges(previous, current);

const notes = [
  `# @thinkhuman/react-native-simple-icons v${packageJson.version}`,
  "",
  `\`npm install @thinkhuman/react-native-simple-icons@${packageJson.version}\``,
  "",
  `[npm package](https://www.npmjs.com/package/@thinkhuman/react-native-simple-icons/v/${packageJson.version}) · [simple-icons](https://github.com/simple-icons/simple-icons/releases)`,
  "",
  renderMarkdownSummary(summary).trim(),
].join("\n");

if (outputPath) {
  await writeFile(path.resolve(rootDir, outputPath), `${notes}\n`);
} else {
  process.stdout.write(`${notes}\n`);
}

async function readPreviousManifest(version: string): Promise<Manifest> {
  const empty: Manifest = {
    simpleIconsVersion: "",
    componentApiHash: "",
    count: 0,
    iconNames: [],
    icons: {},
  };

  let previousTag: string | undefined;

  try {
    const tags = execFileSync("git", ["tag", "-l", "v*", "--sort=-v:refname"], {
      cwd: rootDir,
      encoding: "utf8",
    })
      .trim()
      .split("\n")
      .filter(Boolean);

    // The newest tag below this version, so a backfilled release diffs against its predecessor
    // rather than against a newer release that is already tagged.
    previousTag = tags.find((tag) => {
      const tagVersion = tag.slice(1);
      return isReleaseVersion(tagVersion) && compareVersions(tagVersion, version) < 0;
    });
  } catch {
    return empty;
  }

  if (!previousTag) {
    return empty;
  }

  try {
    const output = execFileSync("git", ["show", `${previousTag}:src/simple-icons-manifest.json`], {
      cwd: rootDir,
      encoding: "utf8",
    });

    return JSON.parse(output) as Manifest;
  } catch {
    return empty;
  }
}
