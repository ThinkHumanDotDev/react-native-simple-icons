import { mkdtemp } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { readFile, writeFile } from "node:fs/promises";
import {
  componentBaseName,
  makeIconRecords,
  makeManifest,
  readDirSnapshot,
  syncPackageVersion,
  writeGeneratedPackage,
} from "../scripts/icon-utils";

const fakeIcons = [
  {
    title: "React",
    slug: "react",
    hex: "61DAFB",
    path: "M1 1h22v22H1z",
  },
  {
    title: "GitHub",
    slug: "github",
    hex: "181717",
    path: "M2 2h20v20H2z",
  },
];

describe("icon naming", () => {
  it("generates valid component names from slugs", () => {
    expect(componentBaseName({ title: "React", slug: "react" })).toBe("SiReact");
    expect(componentBaseName({ title: "1Password", slug: "1password" })).toBe(
      "Si1Password",
    );
    expect(componentBaseName({ title: "C++", slug: "cplusplus" })).toBe("SiCplusplus");
  });

  it("handles collisions deterministically", () => {
    const records = makeIconRecords([
      { title: "Foo Bar", slug: "foo-bar", hex: "111111", path: "M1 1" },
      { title: "FooBar", slug: "foo_bar", hex: "222222", path: "M2 2" },
      { title: "Foo Bar", slug: "foo.bar", hex: "333333", path: "M3 3" },
    ]);

    expect(records.map((icon) => icon.componentName)).toEqual([
      "SiFooBar",
      "SiFooBar2",
      "SiFooBar3",
    ]);
  });
});

describe("manifest generation", () => {
  it("records names and hashes", () => {
    const records = makeIconRecords(fakeIcons);
    const manifest = makeManifest(records, "16.18.0");

    expect(manifest.simpleIconsVersion).toBe("16.18.0");
    expect(manifest.count).toBe(2);
    expect(manifest.iconNames).toEqual(["SiGithub", "SiReact"]);
    expect(manifest.icons.SiReact).toMatchObject({
      title: "React",
      slug: "react",
      hex: "61DAFB",
    });
    expect(manifest.icons.SiReact.hash).toMatch(/^[a-f0-9]{64}$/);
  });

  it("syncs package.json version to the simple-icons version", async () => {
    const root = await mkdtemp(path.join(os.tmpdir(), "rn-simple-icons-"));
    await writeFile(
      path.join(root, "package.json"),
      `${JSON.stringify({ name: "@example/pkg", version: "0.1.0" }, null, 2)}\n`,
    );

    await syncPackageVersion(root, "16.19.0");

    const packageJson = JSON.parse(await readFile(path.join(root, "package.json"), "utf8")) as {
      version: string;
    };
    expect(packageJson.version).toBe("16.19.0");
  });

  it("writes deterministic output", async () => {
    const root = await mkdtemp(path.join(os.tmpdir(), "rn-simple-icons-"));
    const srcDir = path.join(root, "src");
    await writeFile(
      path.join(root, "package.json"),
      `${JSON.stringify({ name: "@example/pkg", version: "16.18.0" }, null, 2)}\n`,
    );

    await writeGeneratedPackage({
      icons: fakeIcons,
      simpleIconsVersion: "16.18.0",
      srcDir,
      rootDir: root,
    });
    const first = await readDirSnapshot(srcDir);

    await writeGeneratedPackage({
      icons: fakeIcons,
      simpleIconsVersion: "16.18.0",
      srcDir,
      rootDir: root,
    });
    const second = await readDirSnapshot(srcDir);

    expect(second).toEqual(first);
  });
});
