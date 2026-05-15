import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiTomtomHex = "DF1B12";
export const SiTomtomTitle = "TomTom";
export const SiTomtomSlug = "tomtom";

export function SiTomtom({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiTomtomHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiTomtomTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12 12.584a4.325 4.325 0 0 1-4.32-4.32A4.325 4.325 0 0 1 12 3.944a4.325 4.325 0 0 1 4.32 4.32 4.325 4.325 0 0 1-4.32 4.32zM12 0C7.443 0 3.736 3.707 3.736 8.264c0 4.557 3.707 8.264 8.264 8.264 4.557 0 8.264-3.707 8.264-8.264C20.264 3.707 16.557 0 12 0m0 24 3.167-5.486H8.833Z" />
    </Svg>
  );
}
