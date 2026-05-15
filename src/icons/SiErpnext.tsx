import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiErpnextHex = "0089FF";
export const SiErpnextTitle = "ERPNext";
export const SiErpnextSlug = "erpnext";

export function SiErpnext({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiErpnextHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiErpnextTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M2.88 0C1.29 0 0 1.29 0 2.88v18.24C0 22.71 1.29 24 2.88 24h18.24c1.59 0 2.88-1.29 2.88-2.88V2.88C24 1.29 22.71 0 21.12 0Zm5.04 5.76h8.254v2.146H7.92Zm0 5.033h7.85v2.146h-5.233v2.954h5.703v2.146H7.92Z" />
    </Svg>
  );
}
