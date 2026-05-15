import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiIlovepdfHex = "E5322D";
export const SiIlovepdfTitle = "iLovePDF";
export const SiIlovepdfSlug = "ilovepdf";

export function SiIlovepdf({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiIlovepdfHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiIlovepdfTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M15.374 2.094c-1.347.65-2.356 1.744-3.094 2.985C11.095 3.087 9.21 1.47 6.356 1.47 3.501 1.47 0 3.894 0 7.987c0 4.145 3.458 6.109 5.171 7.218 1.831 1.185 4.955 3.339 7.11 7.325 2.154-3.986 5.278-6.14 7.109-7.325 1.287-.834 3.56-2.151 4.61-4.514Zm-.104 8.832V3.138l7.788 7.788H15.27z" />
    </Svg>
  );
}
