import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiHyperskillHex = "8C5AFF";
export const SiHyperskillTitle = "Hyperskill";
export const SiHyperskillSlug = "hyperskill";

export function SiHyperskill({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiHyperskillHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiHyperskillTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M22 22.6a1.4 1.4 0 0 1-1.4 1.4h-1.2a1.4 1.4 0 0 1-1.4-1.4V1.4A1.4 1.4 0 0 1 19.4 0h1.2A1.4 1.4 0 0 1 22 1.4zm-8-14a1.4 1.4 0 0 1-1.4 1.4h-1.2A1.4 1.4 0 0 1 10 8.6V3.4A1.4 1.4 0 0 1 11.4 2h1.2A1.4 1.4 0 0 1 14 3.4zm-8.001 8a1.4 1.4 0 0 1-1.4 1.4H3.4A1.4 1.4 0 0 1 2 16.6V7.4A1.4 1.4 0 0 1 3.4 6h1.2A1.4 1.4 0 0 1 6 7.4v9.2zm8.001 4a1.4 1.4 0 0 1-1.4 1.4h-1.2a1.4 1.4 0 0 1-1.4-1.4v-5.2a1.4 1.4 0 0 1 1.4-1.4h1.2a1.4 1.4 0 0 1 1.4 1.4z" />
    </Svg>
  );
}
