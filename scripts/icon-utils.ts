import { createHash } from "node:crypto";
import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

export type SourceIcon = {
  title: string;
  slug?: string;
  hex?: string;
  path: string;
};

export type IconRecord = {
  componentName: string;
  fileName: string;
  title: string;
  slug: string;
  hex: string;
  path: string;
  hash: string;
};

export type ManifestIcon = {
  title: string;
  slug: string;
  hex: string;
  hash: string;
};

export type Manifest = {
  simpleIconsVersion: string;
  componentApiHash: string;
  count: number;
  iconNames: string[];
  icons: Record<string, ManifestIcon>;
};

const componentApiHash = iconHash({
  title: "IconProps(size,color,title)",
  slug: "Svg(width,height,viewBox,accessibilityLabel)",
  hex: "exports(component,hex,title,slug)",
  path: "Path(fill,d)",
});

export function isIcon(value: unknown): value is SourceIcon {
  if (!value || typeof value !== "object") {
    return false;
  }

  const icon = value as Record<string, unknown>;
  return typeof icon.title === "string" && typeof icon.path === "string";
}

export function toPascalName(value: string): string {
  const normalized = value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    .replace(/\+/g, " plus ")
    .replace(/#/g, " sharp ")
    .replace(/@/g, " at ")
    .replace(/%/g, " percent ");

  const parts = normalized.match(/[A-Za-z0-9]+/g) ?? [];
  const words = parts.flatMap((part) => splitWord(part));
  const name = words.map(capitalize).join("");

  return name || "Icon";
}

export function componentBaseName(icon: Pick<SourceIcon, "title" | "slug">): string {
  return `Si${toPascalName(icon.slug || icon.title)}`;
}

export function makeIconRecords(icons: SourceIcon[]): IconRecord[] {
  const used = new Map<string, number>();

  return [...icons]
    .sort(compareSourceIcons)
    .map((icon) => {
      const baseName = componentBaseName(icon);
      const count = used.get(baseName) ?? 0;
      used.set(baseName, count + 1);

      const componentName = count === 0 ? baseName : `${baseName}${count + 1}`;
      const slug = icon.slug || slugFromTitle(icon.title);
      const hex = (icon.hex || "000000").replace(/^#/, "").toUpperCase();

      return {
        componentName,
        fileName: `${componentName}.tsx`,
        title: icon.title,
        slug,
        hex,
        path: icon.path,
        hash: iconHash({
          title: icon.title,
          slug,
          hex,
          path: icon.path,
        }),
      };
    })
    .sort((a, b) => a.componentName.localeCompare(b.componentName));
}

export function makeManifest(records: IconRecord[], simpleIconsVersion: string): Manifest {
  const icons = Object.fromEntries(
    records.map((icon) => [
      icon.componentName,
      {
        title: icon.title,
        slug: icon.slug,
        hex: icon.hex,
        hash: icon.hash,
      },
    ]),
  );

  return {
    simpleIconsVersion,
    componentApiHash,
    count: records.length,
    iconNames: records.map((icon) => icon.componentName),
    icons,
  };
}

export function renderIconFile(icon: IconRecord): string {
  return `import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const ${icon.componentName}Hex = ${JSON.stringify(icon.hex)};
export const ${icon.componentName}Title = ${JSON.stringify(icon.title)};
export const ${icon.componentName}Slug = ${JSON.stringify(icon.slug)};

export function ${icon.componentName}({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? \`#\${${icon.componentName}Hex}\` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? ${icon.componentName}Title}
      {...props}
    >
      <Path fill={resolvedColor} d=${JSON.stringify(icon.path)} />
    </Svg>
  );
}
`;
}

export function renderIndex(records: IconRecord[]): string {
  const exports = records
    .map(
      (icon) =>
        `export { ${icon.componentName}, ${icon.componentName}Hex, ${icon.componentName}Slug, ${icon.componentName}Title } from "./icons/${icon.componentName}.js";`,
    )
    .join("\n");

  return `export type { IconProps } from "./types.js";
${exports}
`;
}

export function renderTypes(): string {
  return `import type { SvgProps } from "react-native-svg";

export type IconProps = Omit<SvgProps, "color"> & {
  size?: number | string;
  color?: string | "default";
  title?: string;
};
`;
}

export async function syncPackageVersion(
  rootDir: string,
  simpleIconsVersion: string,
): Promise<void> {
  const packageJsonPath = path.join(rootDir, "package.json");
  const packageJson = JSON.parse(await readFile(packageJsonPath, "utf8")) as {
    version?: string;
    [key: string]: unknown;
  };

  if (packageJson.version === simpleIconsVersion) {
    return;
  }

  packageJson.version = simpleIconsVersion;
  await writeIfChanged(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`);
}

export async function writeGeneratedPackage(options: {
  icons: SourceIcon[];
  simpleIconsVersion: string;
  srcDir: string;
  rootDir: string;
}): Promise<Manifest> {
  const records = makeIconRecords(options.icons);
  const iconsDir = path.join(options.srcDir, "icons");

  await rm(iconsDir, { force: true, recursive: true });
  await mkdir(iconsDir, { recursive: true });

  await Promise.all(
    records.map((icon) =>
      writeIfChanged(path.join(iconsDir, icon.fileName), renderIconFile(icon)),
    ),
  );

  await writeIfChanged(path.join(options.srcDir, "index.ts"), renderIndex(records));

  const typesPath = path.join(options.srcDir, "types.ts");
  try {
    await readFile(typesPath, "utf8");
  } catch {
    await writeIfChanged(typesPath, renderTypes());
  }

  const manifest = makeManifest(records, options.simpleIconsVersion);
  await writeIfChanged(
    path.join(options.srcDir, "simple-icons-manifest.json"),
    `${JSON.stringify(manifest, null, 2)}\n`,
  );

  await syncPackageVersion(options.rootDir, options.simpleIconsVersion);

  return manifest;
}

export async function readDirSnapshot(dir: string): Promise<Record<string, string>> {
  const files: Record<string, string> = {};
  await collectFiles(dir, dir, files);

  return Object.fromEntries(Object.entries(files).sort(([a], [b]) => a.localeCompare(b)));
}

function iconHash(icon: { title: string; slug: string; hex: string; path: string }): string {
  return createHash("sha256")
    .update(
      JSON.stringify({
        title: icon.title,
        slug: icon.slug,
        hex: icon.hex,
        path: icon.path,
      }),
    )
    .digest("hex");
}

function splitWord(value: string): string[] {
  return (
    value.match(/[0-9]+|[A-Z]+(?=[A-Z][a-z]|[0-9]|$)|[A-Z]?[a-z]+|[A-Z]+/g) ?? [
      value,
    ]
  );
}

function capitalize(value: string): string {
  return `${value.slice(0, 1).toUpperCase()}${value.slice(1).toLowerCase()}`;
}

function slugFromTitle(title: string): string {
  return title
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function compareSourceIcons(a: SourceIcon, b: SourceIcon): number {
  return sourceKey(a).localeCompare(sourceKey(b));
}

function sourceKey(icon: SourceIcon): string {
  return `${icon.slug || ""}\u0000${icon.title}\u0000${icon.path}`;
}

async function writeIfChanged(filePath: string, next: string): Promise<void> {
  try {
    const current = await readFile(filePath, "utf8");
    if (current === next) {
      return;
    }
  } catch {
    await mkdir(path.dirname(filePath), { recursive: true });
  }

  await writeFile(filePath, next);
}

async function collectFiles(
  rootDir: string,
  currentDir: string,
  files: Record<string, string>,
): Promise<void> {
  const entries = await readdir(currentDir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(currentDir, entry.name);

    if (entry.isDirectory()) {
      await collectFiles(rootDir, fullPath, files);
      continue;
    }

    if (entry.isFile()) {
      const relPath = path.relative(rootDir, fullPath).split(path.sep).join("/");
      files[relPath] = await readFile(fullPath, "utf8");
    }
  }
}
