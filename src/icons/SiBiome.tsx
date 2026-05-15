import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiBiomeHex = "60A5FA";
export const SiBiomeTitle = "Biome";
export const SiBiomeSlug = "biome";

export function SiBiome({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiBiomeHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiBiomeTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m12 1.608-5.346 9.259a12.069 12.069 0 0 1 6.326-.219l1.807.426-1.7 7.208-1.809-.427c-2.224-.524-4.361.644-5.264 2.507l-1.672-.809c1.276-2.636 4.284-4.232 7.364-3.505l.847-3.592A10.211 10.211 0 0 0 0 22.392h24L12 1.608Z" />
    </Svg>
  );
}
