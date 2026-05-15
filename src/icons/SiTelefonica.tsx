import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiTelefonicaHex = "0066FF";
export const SiTelefonicaTitle = "Telefónica";
export const SiTelefonicaSlug = "telefonica";

export function SiTelefonica({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiTelefonicaHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiTelefonicaTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M7.162 3.581a3.581 3.581 0 1 0-7.162 0 3.581 3.581 0 0 0 7.162 0m8.419 0a3.581 3.581 0 1 0-7.162 0 3.581 3.581 0 0 0 7.162 0m8.419 0a3.581 3.581 0 1 0-7.162 0 3.581 3.581 0 0 0 7.162 0M15.581 12a3.581 3.581 0 1 0-7.162 0 3.581 3.581 0 0 0 7.162 0m0 8.419a3.581 3.581 0 1 0-7.162 0 3.581 3.581 0 0 0 7.162 0" />
    </Svg>
  );
}
