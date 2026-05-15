import { classifyChanges, renderMarkdownSummary } from "../scripts/classify-utils";
import type { Manifest } from "../scripts/icon-utils";

const emptyManifest: Manifest = {
  simpleIconsVersion: "1.0.0",
  componentApiHash: "api",
  count: 0,
  iconNames: [],
  icons: {},
};

describe("change classification", () => {
  it("suggests a minor release for added icons", () => {
    const summary = classifyChanges(emptyManifest, {
      simpleIconsVersion: "1.1.0",
      componentApiHash: "api",
      count: 1,
      iconNames: ["SiReact"],
      icons: {
        SiReact: {
          title: "React",
          slug: "react",
          hex: "61DAFB",
          hash: "a",
        },
      },
    });

    expect(summary.added).toEqual(["SiReact"]);
    expect(summary.releaseType).toBe("minor");
  });

  it("suggests a major release for removed exports", () => {
    const previous: Manifest = {
      simpleIconsVersion: "1.0.0",
      componentApiHash: "api",
      count: 1,
      iconNames: ["SiReact"],
      icons: {
        SiReact: {
          title: "React",
          slug: "react",
          hex: "61DAFB",
          hash: "a",
        },
      },
    };

    const summary = classifyChanges(previous, emptyManifest);

    expect(summary.removed).toEqual(["SiReact"]);
    expect(summary.releaseType).toBe("major");
    expect(renderMarkdownSummary(summary)).toContain("Removed export SiReact");
  });

  it("suggests a patch release for changed icon data", () => {
    const previous: Manifest = {
      simpleIconsVersion: "1.0.0",
      componentApiHash: "api",
      count: 1,
      iconNames: ["SiReact"],
      icons: {
        SiReact: {
          title: "React",
          slug: "react",
          hex: "61DAFB",
          hash: "a",
        },
      },
    };

    const current: Manifest = {
      simpleIconsVersion: "1.0.1",
      componentApiHash: "api",
      count: 1,
      iconNames: ["SiReact"],
      icons: {
        SiReact: {
          title: "React",
          slug: "react",
          hex: "61DAFB",
          hash: "b",
        },
      },
    };

    const summary = classifyChanges(previous, current);

    expect(summary.changed).toEqual(["SiReact"]);
    expect(summary.releaseType).toBe("patch");
  });

  it("suggests a major release for component API changes", () => {
    const summary = classifyChanges(
      { ...emptyManifest, componentApiHash: "api-1" },
      { ...emptyManifest, simpleIconsVersion: "1.0.1", componentApiHash: "api-2" },
    );

    expect(summary.releaseType).toBe("major");
    expect(summary.breakingChanges).toContain("Component API changed");
  });
});
