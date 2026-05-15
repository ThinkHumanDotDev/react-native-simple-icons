import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiUpptimeHex = "1ABC9C";
export const SiUpptimeTitle = "Upptime";
export const SiUpptimeSlug = "upptime";

export function SiUpptime({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiUpptimeHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiUpptimeTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M11.86 15.68c1.926 0 3.489 1.526 3.489 3.406 0 1.88-1.563 3.407-3.488 3.407-1.926 0-3.489-1.526-3.489-3.407 0-1.88 1.563-3.407 3.489-3.407ZM24 14.884 12 1.507 0 14.885l3.158 3.52L12 8.548l8.842 9.857L24 14.885Z" />
    </Svg>
  );
}
