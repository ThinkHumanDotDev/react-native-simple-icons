import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiK3SHex = "FFC61C";
export const SiK3STitle = "K3s";
export const SiK3SSlug = "k3s";

export function SiK3S({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiK3SHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiK3STitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M21.46 2.172H2.54A2.548 2.548 0 0 0 0 4.712v14.575a2.548 2.548 0 0 0 2.54 2.54h18.92a2.548 2.548 0 0 0 2.54-2.54V4.713a2.548 2.548 0 0 0-2.54-2.54ZM10.14 16.465 5.524 19.15a1.235 1.235 0 1 1-1.242-2.137L8.9 14.33a1.235 1.235 0 1 1 1.241 2.136zm1.817-4.088h-.006a1.235 1.235 0 0 1-1.23-1.24l.023-5.32a1.236 1.236 0 0 1 1.236-1.23h.005a1.235 1.235 0 0 1 1.23 1.241l-.023 5.32a1.236 1.236 0 0 1-1.235 1.23zm8.17 6.32a1.235 1.235 0 0 1-1.688.453l-4.624-2.67a1.235 1.235 0 1 1 1.235-2.14l4.624 2.67a1.235 1.235 0 0 1 .452 1.688z" />
    </Svg>
  );
}
