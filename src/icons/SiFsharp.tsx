import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiFsharpHex = "378BBA";
export const SiFsharpTitle = "F#";
export const SiFsharpSlug = "fsharp";

export function SiFsharp({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiFsharpHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiFsharpTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 12 11.39.61v5.695L5.695 12l5.695 5.695v5.695L0 12zm7.322 0 4.068-4.068v8.136L7.322 12zM24 12 12.203.61v5.695L17.898 12l-5.695 5.695v5.695L24 12z" />
    </Svg>
  );
}
