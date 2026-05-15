import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiDevuanHex = "004489";
export const SiDevuanTitle = "Devuan";
export const SiDevuanSlug = "devuan";

export function SiDevuan({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiDevuanHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiDevuanTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 .415C42.518 10.56 2.297 18.812 2.297 18.812c-.792.127-1.432.54-1.816 1.167-.433.704-.47 1.656-.066 2.326.492.814 1.114 1.096 1.65 1.217.845.191 1.527-.113 1.527-.113s20.562-6.11 20.407-12.214C23.922 8.131 17.694 2.948 0 .415" />
    </Svg>
  );
}
