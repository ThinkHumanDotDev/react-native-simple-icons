import { readFile, writeFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { classifyChanges, renderMarkdownSummary, renderTextSummary } from "./classify-utils";
import type { Manifest } from "./icon-utils";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = parseArgs(process.argv.slice(2));
const currentPath = path.resolve(rootDir, args.current ?? "src/simple-icons-manifest.json");
const previous = await readPreviousManifest(args.previous);
const current = await readManifest(currentPath);
const summary = classifyChanges(previous, current);

if (args.markdown) {
  await writeFile(path.resolve(rootDir, args.markdown), renderMarkdownSummary(summary));
}

if (args.json) {
  await writeFile(path.resolve(rootDir, args.json), `${JSON.stringify(summary, null, 2)}\n`);
}

console.log(renderTextSummary(summary));

async function readPreviousManifest(previousPath?: string): Promise<Manifest> {
  if (previousPath) {
    return readManifest(path.resolve(rootDir, previousPath));
  }

  try {
    const output = execFileSync("git", ["show", "HEAD:src/simple-icons-manifest.json"], {
      cwd: rootDir,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });

    return parseManifest(output);
  } catch {
    return emptyManifest();
  }
}

async function readManifest(filePath: string): Promise<Manifest> {
  return parseManifest(await readFile(filePath, "utf8"));
}

function parseManifest(value: string): Manifest {
  const manifest = JSON.parse(value) as Manifest;

  return {
    simpleIconsVersion: manifest.simpleIconsVersion ?? "",
    componentApiHash: manifest.componentApiHash ?? "",
    count: manifest.count ?? 0,
    iconNames: manifest.iconNames ?? [],
    icons: manifest.icons ?? {},
  };
}

function emptyManifest(): Manifest {
  return {
    simpleIconsVersion: "",
    componentApiHash: "",
    count: 0,
    iconNames: [],
    icons: {},
  };
}

function parseArgs(argv: string[]): {
  current?: string;
  previous?: string;
  markdown?: string;
  json?: string;
} {
  const args: Record<string, string> = {};

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (!arg.startsWith("--")) {
      continue;
    }

    const key = arg.slice(2);
    const value = argv[index + 1];

    if (!value || value.startsWith("--")) {
      throw new Error(`Missing value for --${key}`);
    }

    args[key] = value;
    index += 1;
  }

  return args;
}
