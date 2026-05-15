import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiTeratailHex = "F4C51C";
export const SiTeratailTitle = "teratail";
export const SiTeratailSlug = "teratail";

export function SiTeratail({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiTeratailHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiTeratailTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M9.81.968h4.375L24 23.032h-5.107L12.121 6.605h-.198L5.148 23.03H0Z" />
    </Svg>
  );
}
