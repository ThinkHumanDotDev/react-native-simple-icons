import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiTraeHex = "32F08C";
export const SiTraeTitle = "TRAE";
export const SiTraeSlug = "trae";

export function SiTrae({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiTraeHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiTraeTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M24 20.5H3.5V17H0V3.5h24ZM3.5 17h17V7h-17Zm8.5-5-2.5 2.5L7 12l2.5-2.5Zm7 0-2.5 2.5L14 12l2.5-2.5z" />
    </Svg>
  );
}
