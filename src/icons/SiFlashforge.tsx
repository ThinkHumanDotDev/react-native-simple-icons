import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiFlashforgeHex = "000000";
export const SiFlashforgeTitle = "Flashforge";
export const SiFlashforgeSlug = "flashforge";

export function SiFlashforge({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiFlashforgeHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiFlashforgeTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m.025 12 11.98-12 11.97 12-11.97 12Zm14.544 2.672-2.574 2.584v5.916L23.177 11.97 11.995.76v5.136L9.402 8.53v6.123l5.157-5.196Z" />
    </Svg>
  );
}
