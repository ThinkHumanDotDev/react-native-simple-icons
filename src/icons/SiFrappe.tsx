import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiFrappeHex = "0089FF";
export const SiFrappeTitle = "Frappe";
export const SiFrappeSlug = "frappe";

export function SiFrappe({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiFrappeHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiFrappeTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M2.88 0C1.29 0 0 1.29 0 2.88v18.24C0 22.71 1.29 24 2.88 24h18.24c1.59 0 2.88-1.29 2.88-2.88V2.88C24 1.29 22.71 0 21.12 0H2.88zM8.4 6h8.024v2.111H8.4V6zm0 5.385h7.49v2.113h-4.93V18H8.4v-6.615z" />
    </Svg>
  );
}
