import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiOryHex = "4F46E5";
export const SiOryTitle = "Ory";
export const SiOrySlug = "ory";

export function SiOry({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiOryHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiOryTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-6-.75V3l6-3 6 3v2.25l-6-3zm12 13.5V21l-6 3-6-3v-2.25l6 3z" />
    </Svg>
  );
}
