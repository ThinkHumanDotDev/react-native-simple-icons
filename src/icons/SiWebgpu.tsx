import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiWebgpuHex = "005A9C";
export const SiWebgpuTitle = "WebGPU";
export const SiWebgpuSlug = "webgpu";

export function SiWebgpu({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiWebgpuHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiWebgpuTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m0 4.784 8.652 14.432 8.652-14.432zm22.032.145L20.07 8.202H24L22.032 4.93zm-4.46 0-4.192 6.993h8.384zm2.498 3.575 1.962 3.273L24 8.504zm-6.69 3.72 4.192 6.992 4.192-6.992z" />
    </Svg>
  );
}
