import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiNicehashHex = "FBC342";
export const SiNicehashTitle = "NiceHash";
export const SiNicehashSlug = "nicehash";

export function SiNicehash({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiNicehashHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiNicehashTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12 24c6.627 0 12-5.373 12-12h-8a4 4 0 0 1-8 0H0c0 6.627 5.373 12 12 12zM8 4a4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4 4 4 0 0 1 4 4Zm4-4h12v8H12Z" />
    </Svg>
  );
}
