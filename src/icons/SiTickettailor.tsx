import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiTickettailorHex = "222432";
export const SiTickettailorTitle = "Ticket Tailor";
export const SiTickettailorSlug = "tickettailor";

export function SiTickettailor({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiTickettailorHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiTickettailorTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M21.328 19.239 15.283.631a.913.913 0 0 0-1.15-.586l-3.374 1.096a2.146 2.146 0 1 1-4.083 1.325L3.131 3.62a.73.73 0 0 0-.469.92l6.159 18.955a.73.73 0 0 0 .92.469l3.545-1.152a2.148 2.148 0 1 1 4.085-1.327l3.372-1.096a.913.913 0 0 0 .586-1.15zM10.302 14.52H8.578V8.345H6.506V6.673h5.857v1.672h-2.061zm6.865-3.577h-2.061v6.176H13.38v-6.176h-2.073V9.271h5.86z" />
    </Svg>
  );
}
