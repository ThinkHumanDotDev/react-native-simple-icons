import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiPortswiggerHex = "FF6633";
export const SiPortswiggerTitle = "PortSwigger";
export const SiPortswiggerSlug = "portswigger";

export function SiPortswigger({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiPortswiggerHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiPortswiggerTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 0v24h10.718v-3.805l3.496-4.272h-3.496v-5.205H4.427l6.291-7.767V0Zm13.282 0v3.884L9.786 8.155h3.496v5.205h6.291l-6.291 7.767V24H24V0Z" />
    </Svg>
  );
}
