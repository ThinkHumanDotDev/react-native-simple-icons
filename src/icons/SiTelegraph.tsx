import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiTelegraphHex = "FAFAFA";
export const SiTelegraphTitle = "Telegraph";
export const SiTelegraphSlug = "telegraph";

export function SiTelegraph({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiTelegraphHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiTelegraphTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 0v24h24V0H0zm6 6h12v3h-4.5v9h-3V9H6V6Z" />
    </Svg>
  );
}
