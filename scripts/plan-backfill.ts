import { execFileSync } from "node:child_process";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { isReleaseVersion, planBackfill } from "./backfill-utils";

// Prints, as a JSON array, the simple-icons versions this package skipped on npm.
// Usage: bun scripts/plan-backfill.ts [--from 16.19.0]

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const fromIndex = process.argv.indexOf("--from");
const from = fromIndex === -1 ? undefined : process.argv[fromIndex + 1] || undefined;

if (from && !isReleaseVersion(from)) {
  throw new Error(`--from must be a version like 16.19.0, got "${from}"`);
}

const packageJson = JSON.parse(await readFile(path.join(rootDir, "package.json"), "utf8")) as {
  name: string;
  version: string;
};

const versions = planBackfill({
  upstreamVersions: npmVersions("simple-icons"),
  publishedVersions: npmVersions(packageJson.name),
  currentVersion: packageJson.version,
  from,
});

process.stdout.write(`${JSON.stringify(versions)}\n`);

function npmVersions(packageName: string): string[] {
  let output: string;

  try {
    output = execFileSync("npm", ["view", packageName, "versions", "--json"], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
    });
  } catch (error) {
    const stderr = String((error as { stderr?: unknown }).stderr ?? "");

    // A package that was never published has no versions yet.
    if (stderr.includes("E404")) {
      return [];
    }

    throw error;
  }

  const parsed = JSON.parse(output) as string | string[];

  // npm prints a bare string when a package has a single version.
  return Array.isArray(parsed) ? parsed : [parsed];
}
