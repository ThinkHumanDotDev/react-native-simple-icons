import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiOsanoHex = "7764FA";
export const SiOsanoTitle = "Osano";
export const SiOsanoSlug = "osano";

export function SiOsano({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiOsanoHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiOsanoTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12 6.091A5.909 5.909 0 1017.909 12 5.91 5.91 0 0012 6.091M12 0A12 12 0 110 12 12 12 0 0112 0z" />
    </Svg>
  );
}
