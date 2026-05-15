import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiElevenlabsHex = "000000";
export const SiElevenlabsTitle = "ElevenLabs";
export const SiElevenlabsSlug = "elevenlabs";

export function SiElevenlabs({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiElevenlabsHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiElevenlabsTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M4.6035 0v24h4.9317V0zm9.8613 0v24h4.9317V0z" />
    </Svg>
  );
}
