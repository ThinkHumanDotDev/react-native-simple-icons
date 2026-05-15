import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiCachyosHex = "00AA88";
export const SiCachyosTitle = "CachyOS";
export const SiCachyosSlug = "cachyos";

export function SiCachyos({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiCachyosHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiCachyosTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M5.301 2.646 0 11.771l5.541 9.583h11.486l2.904-5.017H8.102l-2.56-4.429L8.067 7.54h6.063l2.83-4.893ZM20.058 4.12a.748.748 0 0 0 0 1.496.748.748 0 0 0 0-1.496m-1.983 4.303a1.45 1.45 0 0 0 0 2.9 1.45 1.45 0 0 0 0-2.9m4.02 3.98a1.904 1.904 0 0 0 0 3.809 1.904 1.904 0 0 0 0-3.81" />
    </Svg>
  );
}
