import type { Manifest } from "./icon-utils";

export type ReleaseType = "none" | "patch" | "minor" | "major";

export type ChangeSummary = {
  previousVersion: string;
  newVersion: string;
  added: string[];
  removed: string[];
  changed: string[];
  renamed: Array<{ from: string; to: string }>;
  releaseType: ReleaseType;
  breakingChanges: string[];
};

export function classifyChanges(previous: Manifest, current: Manifest): ChangeSummary {
  const previousNames = new Set(previous.iconNames);
  const currentNames = new Set(current.iconNames);
  const added = current.iconNames.filter((name) => !previousNames.has(name));
  const removed = previous.iconNames.filter((name) => !currentNames.has(name));
  const changed = current.iconNames.filter((name) => {
    const before = previous.icons[name];
    const after = current.icons[name];
    return before && after && before.hash !== after.hash;
  });
  const renamed = detectRenames(previous, current, added, removed);
  const breakingChanges = removed.map((name) => `Removed export ${name}`);

  if (
    previous.componentApiHash &&
    current.componentApiHash &&
    previous.componentApiHash !== current.componentApiHash
  ) {
    breakingChanges.push("Component API changed");
  }

  return {
    previousVersion: previous.simpleIconsVersion,
    newVersion: current.simpleIconsVersion,
    added,
    removed,
    changed,
    renamed,
    releaseType: releaseType({ added, removed, changed, breakingChanges }),
    breakingChanges,
  };
}

export function renderMarkdownSummary(summary: ChangeSummary): string {
  const lines = [
    `Previous processed version: ${summary.previousVersion || "none"}`,
    `New processed version: ${summary.newVersion || "unknown"}`,
    `Added icons: ${summary.added.length}`,
    `Removed icons: ${summary.removed.length}`,
    `Changed icons: ${summary.changed.length}`,
    `Suggested release type: ${summary.releaseType}`,
  ];

  if (summary.breakingChanges.length > 0) {
    lines.push("", "Breaking changes:");
    lines.push(...summary.breakingChanges.map((change) => `- ${change}`));
  }

  if (summary.renamed.length > 0) {
    lines.push("", "Possible renamed exports:");
    lines.push(...summary.renamed.map((rename) => `- ${rename.from} -> ${rename.to}`));
  }

  return `${lines.join("\n")}\n`;
}

export function renderTextSummary(summary: ChangeSummary): string {
  return [
    `simple-icons: ${summary.previousVersion || "none"} -> ${summary.newVersion || "unknown"}`,
    `added: ${summary.added.length}`,
    `removed: ${summary.removed.length}`,
    `changed: ${summary.changed.length}`,
    `release: ${summary.releaseType}`,
  ].join("\n");
}

function releaseType(input: {
  added: string[];
  removed: string[];
  changed: string[];
  breakingChanges: string[];
}): ReleaseType {
  if (input.removed.length > 0 || input.breakingChanges.length > 0) {
    return "major";
  }

  if (input.added.length > 0) {
    return "minor";
  }

  if (input.changed.length > 0) {
    return "patch";
  }

  return "none";
}

function detectRenames(
  previous: Manifest,
  current: Manifest,
  added: string[],
  removed: string[],
): Array<{ from: string; to: string }> {
  const addedByHash = new Map(added.map((name) => [current.icons[name]?.hash, name]));
  const renames: Array<{ from: string; to: string }> = [];

  for (const name of removed) {
    const hash = previous.icons[name]?.hash;
    const to = hash ? addedByHash.get(hash) : undefined;

    if (to) {
      renames.push({ from: name, to });
    }
  }

  return renames;
}
