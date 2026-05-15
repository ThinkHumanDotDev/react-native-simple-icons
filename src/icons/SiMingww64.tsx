import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiMingww64Hex = "000000";
export const SiMingww64Title = "MinGW-w64";
export const SiMingww64Slug = "mingww64";

export function SiMingww64({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiMingww64Hex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiMingww64Title}
      {...props}
    >
      <Path fill={resolvedColor} d="m -3e-4,9.3955 4.187,-4.187 4.1869,4.187 -4.187,4.187 z m 0,10.417 4.187,-4.1869 4.1869,4.187 -4.187,4.1869 z m 5.2086,-5.2085 4.1869,-4.187 4.187,4.187 -4.187,4.187 z m 0,-10.417 L 9.3953,0 13.5822,4.187 9.3952,8.3738 Z m 5.2085,5.2084 4.187,-4.1869 4.1869,4.187 -4.187,4.1869 z M 15.6253,4.187 19.8123,0 l 4.1869,4.187 -4.187,4.1869 z m -5.208,15.626 4.187,-4.1869 4.1869,4.187 L 14.6042,24 Z m 5.2086,-5.2085 4.187,-4.187 4.1868,4.187 -4.1869,4.187 z" />
    </Svg>
  );
}
