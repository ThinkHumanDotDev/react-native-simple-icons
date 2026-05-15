import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiMitsubishiHex = "E60012";
export const SiMitsubishiTitle = "Mitsubishi";
export const SiMitsubishiSlug = "mitsubishi";

export function SiMitsubishi({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiMitsubishiHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiMitsubishiTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M8 22.38H0l4-6.92h8zm8 0h8l-4-6.92h-8zm0-13.84l-4-6.92-4 6.92 4 6.92Z" />
    </Svg>
  );
}
