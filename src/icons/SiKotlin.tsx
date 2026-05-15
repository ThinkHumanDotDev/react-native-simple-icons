import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiKotlinHex = "7F52FF";
export const SiKotlinTitle = "Kotlin";
export const SiKotlinSlug = "kotlin";

export function SiKotlin({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiKotlinHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiKotlinTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M24 24H0V0h24L12 12Z" />
    </Svg>
  );
}
