import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiQuad9Hex = "DC205E";
export const SiQuad9Title = "Quad9";
export const SiQuad9Slug = "quad9";

export function SiQuad9({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiQuad9Hex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiQuad9Title}
      {...props}
    >
      <Path fill={resolvedColor} d="M6.822 24h5.608l6.331-9.48c1.463-2.185 2.288-4.197 2.288-6.4C21.05 3.458 17.144 0 12 0 6.822 0 2.95 3.493 2.95 8.207c0 4.507 3.459 8 8.345 8 .413 0 .757-.018 1.083-.07zM12 12.129c-2.426 0-4.215-1.634-4.215-3.957 0-2.34 1.79-3.957 4.215-3.957 2.409 0 4.215 1.617 4.215 3.957 0 2.323-1.806 3.957-4.215 3.957z" />
    </Svg>
  );
}
