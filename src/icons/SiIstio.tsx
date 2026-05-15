import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiIstioHex = "466BB0";
export const SiIstioTitle = "Istio";
export const SiIstioSlug = "istio";

export function SiIstio({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiIstioHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiIstioTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M4 21 20 21 10 24zM4 20 10 19 10 8zM11 19 20 20 11 0z" />
    </Svg>
  );
}
