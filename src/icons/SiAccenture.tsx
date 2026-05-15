import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiAccentureHex = "A100FF";
export const SiAccentureTitle = "Accenture";
export const SiAccentureSlug = "accenture";

export function SiAccenture({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiAccentureHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiAccentureTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m.66 16.95 13.242-4.926L.66 6.852V0l22.68 9.132v5.682L.66 24Z" />
    </Svg>
  );
}
