import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiOpnsenseHex = "E44A20";
export const SiOpnsenseTitle = "OPNsense";
export const SiOpnsenseSlug = "opnsense";

export function SiOpnsense({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiOpnsenseHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiOpnsenseTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M5.25 0v5.25h13.5v13.5H24V7.5L16.5 0Zm13.5 18.75H5.25V5.25H0V16.5L7.5 24h11.25Z" />
    </Svg>
  );
}
