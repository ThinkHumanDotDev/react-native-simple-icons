import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiHotwireHex = "FFE801";
export const SiHotwireTitle = "Hotwire";
export const SiHotwireSlug = "hotwire";

export function SiHotwire({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiHotwireHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiHotwireTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m16.764 6.917-3.48.81L16.32 0 7.236 11.705l4.334-.854-4.087 7.982 2.364-.532L7.456 24l7.51-8.111-2.77.64 4.568-9.612z" />
    </Svg>
  );
}
