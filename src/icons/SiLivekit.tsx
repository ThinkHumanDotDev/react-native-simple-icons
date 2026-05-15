import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiLivekitHex = "FFFFFF";
export const SiLivekitTitle = "LiveKit";
export const SiLivekitSlug = "livekit";

export function SiLivekit({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiLivekitHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiLivekitTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 0v24h14.4v-4.799h4.8V24H24v-4.8h-4.799v-4.8h-4.8v4.8H4.8V0H0zm14.4 14.4V9.602h4.801V4.8H24V0h-4.8v4.8h-4.8v4.8H9.6v4.8h4.8z" />
    </Svg>
  );
}
