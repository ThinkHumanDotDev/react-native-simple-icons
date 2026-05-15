import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiEraserHex = "EC2C40";
export const SiEraserTitle = "Eraser";
export const SiEraserSlug = "eraser";

export function SiEraser({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiEraserHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiEraserTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M4.186 7.328c-.248 0-.482.168-.608.443l-3.476 7.51c-.283.61.057 1.39.605 1.39h10.682V7.329zm8.425 0-.002 9.344h7.205c.248 0 .482-.168.608-.443l3.476-7.51c.283-.61-.057-1.39-.605-1.39Z" />
    </Svg>
  );
}
