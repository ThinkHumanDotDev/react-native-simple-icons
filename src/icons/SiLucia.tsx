import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiLuciaHex = "5F57FF";
export const SiLuciaTitle = "Lucia";
export const SiLuciaSlug = "lucia";

export function SiLucia({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiLuciaHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiLuciaTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M20.382 20.714 12 0 3.618 20.714 2.288 24h19.423zM12 13.61l-5.73 7.058 1.288-3.184L12 6.505l4.442 10.978 1.289 3.184z" />
    </Svg>
  );
}
