import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiFramerHex = "0055FF";
export const SiFramerTitle = "Framer";
export const SiFramerSlug = "framer";

export function SiFramer({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiFramerHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiFramerTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
    </Svg>
  );
}
