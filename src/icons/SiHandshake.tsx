import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiHandshakeHex = "D3FB52";
export const SiHandshakeTitle = "Handshake";
export const SiHandshakeSlug = "handshake";

export function SiHandshake({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiHandshakeHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiHandshakeTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M20.728 0 16.49 24h-4.583l1.87-10.532-4.743 3.893L7.856 24H3.272L7.51 0h4.582L9.806 13.012l4.729-3.862L16.145 0h4.583z" />
    </Svg>
  );
}
