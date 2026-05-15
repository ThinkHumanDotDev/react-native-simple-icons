import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiTvtimeHex = "FFD400";
export const SiTvtimeTitle = "TV Time";
export const SiTvtimeSlug = "tvtime";

export function SiTvtime({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiTvtimeHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiTvtimeTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 0v24h24V0zm4.8 4.8h14.4v4.8h-4.8v9.6H9.6V9.6H4.8Z" />
    </Svg>
  );
}
