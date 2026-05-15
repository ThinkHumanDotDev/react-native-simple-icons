import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiKeystoneHex = "166BFF";
export const SiKeystoneTitle = "Keystone";
export const SiKeystoneSlug = "keystone";

export function SiKeystone({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiKeystoneHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiKeystoneTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M4.5 0A4.5 4.5 0 000 4.5v15A4.5 4.5 0 004.5 24h15a4.5 4.5 0 004.5-4.5v-15A4.5 4.5 0 0019.5 0zm5.47 14.789v3.586H6.744V5.692H9.97v5.45h.167l4.218-5.45h3.463l-4.385 5.599 4.64 7.084h-3.788l-3.2-5.001z" />
    </Svg>
  );
}
