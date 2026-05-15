import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiOmarchyHex = "9ECE6A";
export const SiOmarchyTitle = "Omarchy";
export const SiOmarchySlug = "omarchy";

export function SiOmarchy({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiOmarchyHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiOmarchyTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 0v24h12.8v-3.2h8V3.2h-3.2v1.6h1.6v14.4H4.8V4.8h8V1.6h9.6v20.8h-8V24H24V0Zm1.6 1.6h9.6v1.6h-8v8H1.6Zm0 11.2h1.6v8h8v1.6H1.6Z" />
    </Svg>
  );
}
