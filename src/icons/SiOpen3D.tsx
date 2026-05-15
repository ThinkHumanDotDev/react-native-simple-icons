import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiOpen3DHex = "000000";
export const SiOpen3DTitle = "Open3D";
export const SiOpen3DSlug = "open3d";

export function SiOpen3D({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiOpen3DHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiOpen3DTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M5.998 1.606 0 12l5.998 10.394h2.094l1.954-3.383H7.952L4.06 12.268h8.149l3.56 6.157L19.483 12l-3.715-6.444-3.56 6.18H4.055l3.893-6.747h2.098L8.088 1.606Zm2.71 0 1.954 3.383h5.386L20.096 12l-4.044 7.011h-5.394l-1.954 3.383h9.294l.488-.847L24 12 18.002 1.606Z" />
    </Svg>
  );
}
