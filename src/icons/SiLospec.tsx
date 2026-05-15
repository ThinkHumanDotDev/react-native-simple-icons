import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiLospecHex = "EAEAEA";
export const SiLospecTitle = "Lospec";
export const SiLospecSlug = "lospec";

export function SiLospec({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiLospecHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiLospecTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M4.23 0v24h15.541v-8.4004h-7.1719v3.5996H11.402V0z" />
    </Svg>
  );
}
