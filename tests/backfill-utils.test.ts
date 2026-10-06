import { compareVersions, planBackfill } from "../scripts/backfill-utils";

describe("version comparison", () => {
  it("compares numerically, not lexically", () => {
    expect(compareVersions("16.9.0", "16.10.0")).toBeLessThan(0);
    expect(compareVersions("16.24.1", "16.24.0")).toBeGreaterThan(0);
    expect(compareVersions("16.19.0", "16.19.0")).toBe(0);
  });
});

describe("backfill plan", () => {
  const upstreamVersions = [
    "16.17.0",
    "16.18.0",
    "16.18.1",
    "16.19.0",
    "16.20.0",
    "16.24.0",
    "16.24.1",
    "16.30.0",
    "16.31.0",
    "16.34.0",
    "17.0.0-beta.1",
  ];

  it("lists skipped upstream versions from the first published version to main, oldest first", () => {
    expect(
      planBackfill({
        upstreamVersions,
        publishedVersions: ["16.19.0", "16.30.0"],
        currentVersion: "16.30.0",
      }),
    ).toEqual(["16.20.0", "16.24.0", "16.24.1"]);
  });

  it("leaves the version on main to the regular publish job", () => {
    expect(
      planBackfill({
        upstreamVersions,
        publishedVersions: ["16.19.0", "16.30.0"],
        currentVersion: "16.34.0",
      }),
    ).toEqual(["16.20.0", "16.24.0", "16.24.1", "16.31.0"]);
  });

  it("never goes past the newest version on main or npm", () => {
    expect(
      planBackfill({
        upstreamVersions,
        publishedVersions: ["16.19.0", "16.24.0"],
        currentVersion: "16.24.0",
      }),
    ).toEqual(["16.20.0"]);
  });

  it("honours an explicit lower bound", () => {
    expect(
      planBackfill({
        upstreamVersions,
        publishedVersions: ["16.19.0", "16.30.0"],
        currentVersion: "16.30.0",
        from: "16.18.0",
      }),
    ).toEqual(["16.18.0", "16.18.1", "16.20.0", "16.24.0", "16.24.1"]);
  });

  it("is empty once every version is published", () => {
    expect(
      planBackfill({
        upstreamVersions: ["16.19.0", "16.20.0"],
        publishedVersions: ["16.19.0", "16.20.0"],
        currentVersion: "16.20.0",
      }),
    ).toEqual([]);
  });

  it("is empty before the first publish", () => {
    expect(
      planBackfill({ upstreamVersions, publishedVersions: [], currentVersion: "16.19.0" }),
    ).toEqual([]);
  });
});
