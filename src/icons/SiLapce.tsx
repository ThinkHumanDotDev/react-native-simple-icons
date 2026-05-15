import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiLapceHex = "3B82F6";
export const SiLapceTitle = "Lapce";
export const SiLapceSlug = "lapce";

export function SiLapce({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiLapceHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiLapceTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M3.802 1.267 1.608 0v24L8 20.31v-2.535L3.802 20.2Zm4.208 13.9V6.231L18.003 12l-7.798 4.503v2.533L22.392 12 5.806 2.424V16.44Zm5.598-3.231L10.205 9.97v3.93Z" />
    </Svg>
  );
}
