import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiParrotsecurityHex = "15E0ED";
export const SiParrotsecurityTitle = "Parrot Security";
export const SiParrotsecuritySlug = "parrotsecurity";

export function SiParrotsecurity({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiParrotsecurityHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiParrotsecurityTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0Zm6.267 2.784L13.03 5.54l8.05-.179-8.05 3.333-2.154 2.688 5.007 9.038-1.536-1.605 1.645 3.456-4.937-5.527-6.268-6.28L2.77 12.11l.7-3.442 4.018-.261.823-4.06Z" />
    </Svg>
  );
}
