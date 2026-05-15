import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiDasersteHex = "001A4B";
export const SiDasersteTitle = "Das Erste";
export const SiDasersteSlug = "daserste";

export function SiDaserste({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiDasersteHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiDasersteTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M11.646.005C5.158.2-.001 5.57 0 12.127.135 18.724 5.468 24 12 24s11.865-5.276 12-11.873C24.001 5.291 18.41-.195 11.645.005zm5.138 4.93V16.96L8.78 19.92v-9.08l-3.9 1.386V9.263l11.903-4.328z" />
    </Svg>
  );
}
