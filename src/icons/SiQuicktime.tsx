import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiQuicktimeHex = "1C69F0";
export const SiQuicktimeTitle = "QuickTime";
export const SiQuicktimeSlug = "quicktime";

export function SiQuicktime({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiQuicktimeHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiQuicktimeTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12.002 0a11.998 12 0 106.629 22l1.98 1.97h3.139l.25-.25v-3.15l-2-1.98A11.938 11.94 0 0024 12 11.998 12 0 0012.002 0m0 4.2a7.799 7.8 0 016.949 11.33l-5.25-5.26a2.404 2.404 0 10-3.4 3.4l5.27 5.26a7.759 7.76 0 01-3.57.87 7.799 7.8 0 010-15.6z" />
    </Svg>
  );
}
