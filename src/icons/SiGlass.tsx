import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiGlassHex = "FFCC00";
export const SiGlassTitle = "Glass";
export const SiGlassSlug = "glass";

export function SiGlass({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiGlassHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiGlassTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M11 0v24A12 12 0 0 1 0 12 12 12 0 0 1 11 0m13 13a11 11 0 0 1-11 11V13zm-5.5-2a1 1 0 0 0 0-11 1 1 0 0 0 0 11" />
    </Svg>
  );
}
