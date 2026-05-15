import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiVerizonHex = "CD040B";
export const SiVerizonTitle = "Verizon";
export const SiVerizonSlug = "verizon";

export function SiVerizon({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiVerizonHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiVerizonTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M18.302 0H22v.003L10.674 24H7.662L2 12h3.727l3.449 7.337z" />
    </Svg>
  );
}
