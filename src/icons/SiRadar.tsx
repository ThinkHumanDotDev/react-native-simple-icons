import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiRadarHex = "007AFF";
export const SiRadarTitle = "Radar";
export const SiRadarSlug = "radar";

export function SiRadar({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiRadarHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiRadarTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12 0L2.197 23.975 12 19.952 21.803 24z" />
    </Svg>
  );
}
