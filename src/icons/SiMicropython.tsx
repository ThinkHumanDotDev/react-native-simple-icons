import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiMicropythonHex = "2B2728";
export const SiMicropythonTitle = "MicroPython";
export const SiMicropythonSlug = "micropython";

export function SiMicropython({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiMicropythonHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiMicropythonTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 0h11.509v18.737h.982V0H24v24h-5.263V5.263h-.983V24H6.246V5.263l-.983.035V24H0zm22.246 19.509h-1.404v2.386h1.404z" />
    </Svg>
  );
}
