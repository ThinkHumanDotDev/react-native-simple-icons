import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiTyHex = "46EBE1";
export const SiTyTitle = "ty";
export const SiTySlug = "ty";

export function SiTy({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiTyHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiTyTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M24 3.84H13.92V0h-12v3.84H0v9.12h1.92v7.147A3.893 3.893 0 0 0 5.813 24H24v-9.12H13.92v-1.92h6.187A3.893 3.893 0 0 0 24 9.067Z" />
    </Svg>
  );
}
