import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiVoidlinuxHex = "478061";
export const SiVoidlinuxTitle = "Void Linux";
export const SiVoidlinuxSlug = "voidlinux";

export function SiVoidlinux({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiVoidlinuxHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiVoidlinuxTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M15.818 12a3.82 3.82 0 0 1-3.82 3.82A3.82 3.82 0 0 1 8.178 12a3.82 3.82 0 0 1 3.82-3.82 3.82 3.82 0 0 1 3.82 3.82Zm3.179 9.73-2.726-2.725A8.212 8.212 0 0 1 12 20.212 8.212 8.212 0 0 1 3.788 12a8.212 8.212 0 0 1 1.209-4.269l-2.73-2.73A12 12 0 0 0 0 12c0 6.627 5.373 12 12 12a12 12 0 0 0 6.997-2.27zM12 0a12 12 0 0 0-6.997 2.27L7.73 4.994A8.212 8.212 0 0 1 12 3.788 8.212 8.212 0 0 1 20.212 12a8.212 8.212 0 0 1-1.209 4.269l2.73 2.73A12 12 0 0 0 24 12c0-6.627-5.373-12-12-12Z" />
    </Svg>
  );
}
