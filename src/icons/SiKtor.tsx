import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiKtorHex = "087CFA";
export const SiKtorTitle = "Ktor";
export const SiKtorSlug = "ktor";

export function SiKtor({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiKtorHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiKtorTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M8 0 0 8l8 8V8h8zm8 8v8H8l8 8 8-8z" />
    </Svg>
  );
}
