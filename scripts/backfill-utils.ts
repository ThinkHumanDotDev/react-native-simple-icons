// Release versions only (MAJOR.MINOR.PATCH); simple-icons does not publish prereleases we mirror.
const releaseVersionPattern = /^(\d+)\.(\d+)\.(\d+)$/;

export function isReleaseVersion(version: string): boolean {
  return releaseVersionPattern.test(version);
}

export function compareVersions(a: string, b: string): number {
  const left = parseVersion(a);
  const right = parseVersion(b);

  for (let index = 0; index < 3; index += 1) {
    const difference = left[index] - right[index];

    if (difference !== 0) {
      return difference;
    }
  }

  return 0;
}

export type BackfillPlanInput = {
  // Every version of simple-icons on npm.
  upstreamVersions: string[];
  // Every version of this package on npm.
  publishedVersions: string[];
  // Version on main; the regular publish job owns it, so it is never backfilled.
  currentVersion: string;
  // Lowest version to backfill. Defaults to the first version this package published.
  from?: string;
};

// Upstream release versions in [from, newest of main and npm] that this package has not published,
// oldest first, so each GitHub release can diff against the one before it.
export function planBackfill({
  upstreamVersions,
  publishedVersions,
  currentVersion,
  from,
}: BackfillPlanInput): string[] {
  const published = new Set(publishedVersions);
  const releasedVersions = publishedVersions.filter(isReleaseVersion).sort(compareVersions);
  const lowerBound = from ?? releasedVersions[0];

  if (!lowerBound) {
    return [];
  }

  const upperBound = [currentVersion, ...releasedVersions].sort(compareVersions).at(-1) as string;

  return upstreamVersions
    .filter(isReleaseVersion)
    .filter(
      (version) =>
        compareVersions(version, lowerBound) >= 0 &&
        compareVersions(version, upperBound) <= 0 &&
        version !== currentVersion &&
        !published.has(version),
    )
    .sort(compareVersions);
}

function parseVersion(version: string): [number, number, number] {
  const match = releaseVersionPattern.exec(version);

  if (!match) {
    throw new Error(`Not a release version: ${version}`);
  }

  return [Number(match[1]), Number(match[2]), Number(match[3])];
}
