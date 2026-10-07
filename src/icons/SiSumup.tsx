import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiSumupHex = "1E1C1C";
export const SiSumupTitle = "SumUp";
export const SiSumupSlug = "sumup";

export function SiSumup({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiSumupHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiSumupTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M19.488 0A4.51 4.51 0 0 1 24 4.512v14.976A4.51 4.51 0 0 1 19.488 24H4.512A4.51 4.51 0 0 1 0 19.488V4.512A4.51 4.51 0 0 1 4.512 0zM7.308 17.855a5.4 5.4 0 0 0 7.649 0 5.424 5.424 0 0 0 0-7.662zm9.385-11.71a5.4 5.4 0 0 0-7.649 0 5.424 5.424 0 0 0 0 7.662z" />
    </Svg>
  );
}
