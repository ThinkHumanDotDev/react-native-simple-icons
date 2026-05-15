import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiSocketHex = "C93CD7";
export const SiSocketTitle = "Socket";
export const SiSocketSlug = "socket";

export function SiSocket({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiSocketHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiSocketTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M2.93 11.171c0 5.92 3.778 10.957 9.063 12.829a13.652 13.652 0 0 0 6.513-4.89 13.497 13.497 0 0 0 2.564-7.939V3.274L11.997 0 2.933 3.274v7.897zm7.491-6.09h4.208L13.34 9.47h2.292l-6.264 9.446 1.486-6.858H8.365z" />
    </Svg>
  );
}
