import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiNanoHex = "209CE9";
export const SiNanoTitle = "Nano";
export const SiNanoSlug = "nano";

export function SiNano({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiNanoHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiNanoTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m3.723 0 6.875 10.76H4.775v1.365h5.881l-1.76 2.73h-4.12v1.364h3.242L3.006 24h1.85l5.068-7.781h4.215L19.129 24h1.865l-4.941-7.781h3.232v-1.364h-4.1l-1.732-2.73h5.832V10.76h-5.803L20.45 0h-1.785l-6.588 10.107L5.627 0H3.723zm8.324 12.959 1.217 1.896h-2.451l1.234-1.896z" />
    </Svg>
  );
}
