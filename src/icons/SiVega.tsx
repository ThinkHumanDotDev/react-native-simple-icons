import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiVegaHex = "2450B2";
export const SiVegaTitle = "Vega";
export const SiVegaSlug = "vega";

export function SiVega({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiVegaHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiVegaTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M19.39 8.693H24l-3.123-6.68ZM6.68 1.987H0L7.098 22.03h.008l2.86-10.73zm14.197-.016-7.098 20.042h-6.68L14.195 1.97" />
    </Svg>
  );
}
