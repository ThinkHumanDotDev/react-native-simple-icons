import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiWgpuHex = "40E0D0";
export const SiWgpuTitle = "wgpu";
export const SiWgpuSlug = "wgpu";

export function SiWgpu({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiWgpuHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiWgpuTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M3.9999 2.0001 0 22h8.0001L12 15.0002l3.9999 6.9997H24L20.0001 2l-5.0003 8L12 6 9.0002 9.9999Z" />
    </Svg>
  );
}
