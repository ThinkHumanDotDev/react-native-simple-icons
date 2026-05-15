import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiComicfuryHex = "79BD42";
export const SiComicfuryTitle = "ComicFury";
export const SiComicfurySlug = "comicfury";

export function SiComicfury({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiComicfuryHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiComicfuryTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m0 6.959 1.899-3.256 2.725 2.736 2.973-.204L9.3 3.297l2.213 2.693 8.655-.252.406-1.085L24 5.128v5.268l-11.248 3.526-1.085 6.781H0V6.959zm2.195-.748L1.041 8.137l1.75 1.748 1.133-1.948-1.729-1.726zm7.409-.448L8.48 7.546l1.224 1.598 1.137-1.766-1.237-1.615zm3.901 3.751-1.992.349.997 2.025.995-2.374zm3.319-.565-1.992.348.996 2.025.996-2.373zm3.228-.611-1.991.349.996 2.025.995-2.374zm3.183-.566-1.992.349.996 2.025.996-2.374z" />
    </Svg>
  );
}
