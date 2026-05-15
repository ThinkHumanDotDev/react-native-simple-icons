import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiDovetailHex = "190041";
export const SiDovetailTitle = "Dovetail";
export const SiDovetailSlug = "dovetail";

export function SiDovetail({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiDovetailHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiDovetailTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M6.75 0 1.5 3l5.25 3v6L12 9V3Zm0 12L1.5 15l5.25 3v6L12 21v-6Zm10.5-6L12 8.966 17.25 12v6l5.25-3V9Z" />
    </Svg>
  );
}
