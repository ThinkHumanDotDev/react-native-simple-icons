import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiCratedbHex = "009DC7";
export const SiCratedbTitle = "CrateDB";
export const SiCratedbSlug = "cratedb";

export function SiCratedb({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiCratedbHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiCratedbTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M18 9V3h-6v6H0v6h6v6h6v-6h12V9h-6z" />
    </Svg>
  );
}
