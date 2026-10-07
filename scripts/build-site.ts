import { copyFile, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as simpleIcons from "simple-icons";
import { isIcon, makeIconRecords, type SourceIcon } from "./icon-utils";

// Builds the GitHub Pages site in `_site`. The page layout and behaviour are adapted
// from simpleicons.org (https://github.com/simple-icons/simple-icons-website-rs, CC0-1.0).

type SiteIcon = SourceIcon & {
  slug: string;
  hex: string;
  source?: string;
  guidelines?: string;
  license?: { type: string; url?: string };
};

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const siteDir = path.join(rootDir, "site");
const outDir = path.join(rootDir, "_site");
const siteUrl = "https://thinkhumandotdev.github.io/react-native-simple-icons/";

const sourceIcons = Object.values(simpleIcons).filter(isIcon) as SiteIcon[];
const sourceBySlug = new Map(sourceIcons.map((icon) => [icon.slug, icon]));
const records = makeIconRecords(sourceIcons).sort((a, b) =>
  a.title.localeCompare(b.title, "en", { sensitivity: "base" }),
);
const colorRank = new Map(sortByColor(records.map((icon) => icon.hex)).map((hex, index) => [hex, index]));

await rm(outDir, { recursive: true, force: true });
await mkdir(path.join(outDir, "icons"), { recursive: true });

await Promise.all(
  records.map((icon) =>
    writeFile(
      path.join(outDir, "icons", `${icon.slug}.svg`),
      `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>${escapeHtml(icon.title)}</title><path d="${icon.path}"/></svg>`,
    ),
  ),
);

const items = records
  .map((icon, alphaIndex) => {
    const source = sourceBySlug.get(icon.slug);
    const title = escapeHtml(icon.title);
    const links = [
      source?.guidelines
        ? `<a class="guidelines" href="${escapeHtml(source.guidelines)}" rel="noopener" target="_blank">Brand guidelines</a>`
        : "",
      source?.license
        ? `<a class="license" href="${escapeHtml(source.license.url ?? source.source ?? "")}" rel="noopener" target="_blank">${escapeHtml(source.license.type)}</a>`
        : "",
    ].join("");

    return `<li data-o="${alphaIndex}-${colorRank.get(icon.hex)}" data-slug="${icon.slug}" data-name="${icon.componentName}" data-source="${escapeHtml(source?.source ?? "")}">
<button class="preview copy" data-copy="svg" title="Copy ${title} SVG"><img loading="lazy" src="icons/${icon.slug}.svg" alt="${title}" width="56" height="56"></button>
${links ? `<div class="links">${links}</div>` : ""}<h2 class="copy" data-copy="import" title="Copy import for ${icon.componentName}">${title}</h2>
<div class="footer"><button class="hex copy${isLight(icon.hex) ? " dark" : ""}" data-copy="hex" style="background:#${icon.hex}" title="Copy ${title} color">#${icon.hex}</button><button class="view" title="View ${title}"><svg viewBox="0 0 24 24"><use href="#i-view"/></svg></button><button class="download" title="Download ${title}"><svg viewBox="0 0 24 24"><use href="#i-download"/></svg></button></div>
</li>`;
  })
  .join("\n");

const template = await readFile(path.join(siteDir, "index.html"), "utf8");
const html = template
  .replaceAll("{{count}}", String(records.length))
  .replaceAll("{{siteUrl}}", siteUrl)
  .replace(/\{\{path:([a-z0-9]+)\}\}/g, (_, slug: string) => {
    const icon = sourceBySlug.get(slug);
    if (!icon) throw new Error(`Unknown simple-icons slug in site template: ${slug}`);
    return icon.path;
  })
  .replace("{{items}}", () => items);

await writeFile(path.join(outDir, "index.html"), html);
await copyFile(path.join(siteDir, "style.css"), path.join(outDir, "style.css"));
await copyFile(path.join(siteDir, "app.js"), path.join(outDir, "app.js"));
await copyFile(path.join(rootDir, "assets", "simple-icons.svg"), path.join(outDir, "favicon.svg"));
await writeFile(path.join(outDir, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${siteUrl}sitemap.xml\n`);
await writeFile(
  path.join(outDir, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${siteUrl}</loc></url></urlset>\n`,
);
await writeFile(path.join(outDir, ".nojekyll"), "");

console.log(`Built site with ${records.length} icons in ${path.relative(rootDir, outDir)}`);

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function rgb(hex: string): [number, number, number] {
  return [0, 2, 4].map((offset) => Number.parseInt(hex.slice(offset, offset + 2), 16)) as [number, number, number];
}

// Picks dark text for light brand colors, using relative luminance.
function isLight(hex: string): boolean {
  const [r, g, b] = rgb(hex).map((channel) => {
    const value = channel / 255;
    return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b > 0.4;
}

// Colorful hues first, then blacks, grays and whites, as on simpleicons.org.
function sortByColor(hexes: string[]): string[] {
  const mapped = [...new Set(hexes)].map((hex) => {
    const [r, g, b] = rgb(hex);
    const [rn, gn, bn] = [r / 255, g / 255, b / 255];
    const max = Math.max(rn, gn, bn);
    const min = Math.min(rn, gn, bn);
    const delta = max - min;
    let h = 0;
    if (delta !== 0) {
      if (max === rn) h = ((gn - bn) / delta) % 6;
      else if (max === gn) h = (bn - rn) / delta + 2;
      else h = (rn - gn) / delta + 4;
    }
    h = Math.round(h * 60);
    if (h < 0) h += 360;
    const l = ((max + min) / 2) * 100;
    const s = delta === 0 ? 0 : (delta / (1 - Math.abs((2 * l) / 100 - 1))) * 100;
    const gray = Math.max(r, g, b) - Math.min(r, g, b) <= 10;
    return { hex, h, s, l, neutral: l <= 15 || l >= 90 || gray };
  });

  const colored = mapped.filter((c) => !c.neutral).sort((a, b) => a.h - b.h || a.s - b.s || a.l - b.l);
  const neutral = mapped.filter((c) => c.neutral).sort((a, b) => b.l - a.l);
  return [...colored, ...neutral].map((c) => c.hex);
}
