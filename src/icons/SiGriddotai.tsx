import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiGriddotaiHex = "78FF96";
export const SiGriddotaiTitle = "Grid.ai";
export const SiGriddotaiSlug = "griddotai";

export function SiGriddotai({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiGriddotaiHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiGriddotaiTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M17.732 9.091v-3.52H6.506v12.816h5.612v-5.613h11.226V24h-5.613v-5.613H12.12V24h-4.5a6.965 6.965 0 0 1-6.964-6.964V6.966A6.966 6.966 0 0 1 7.619 0h8.762a6.965 6.965 0 0 1 6.964 6.964v2.127h-5.613z" />
    </Svg>
  );
}
