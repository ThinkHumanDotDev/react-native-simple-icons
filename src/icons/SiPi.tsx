import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiPiHex = "000000";
export const SiPiTitle = "Pi";
export const SiPiSlug = "pi";

export function SiPi({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiPiHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiPiTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 0v24h6v-6h6v-6H6V6h6v6h6V0Zm18 12v12h6V12Z" />
    </Svg>
  );
}
