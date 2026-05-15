import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiPeertubeHex = "F1680D";
export const SiPeertubeTitle = "PeerTube";
export const SiPeertubeSlug = "peertube";

export function SiPeertube({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiPeertubeHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiPeertubeTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12 6.545v10.91L20.727 12M3.273 12v12L12 17.455M3.273 0v12L12 6.545" />
    </Svg>
  );
}
