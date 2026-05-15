import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiAtlasosHex = "1A91FF";
export const SiAtlasosTitle = "AtlasOS";
export const SiAtlasosSlug = "atlasos";

export function SiAtlasos({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiAtlasosHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiAtlasosTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m12 1.608 12 20.785H0l2.537-4.394h13.852L12 10.396l-1.844 3.193H5.082z" />
    </Svg>
  );
}
