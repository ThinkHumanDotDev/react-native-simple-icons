import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiGooglechronicleHex = "4285F4";
export const SiGooglechronicleTitle = "Google Chronicle";
export const SiGooglechronicleSlug = "googlechronicle";

export function SiGooglechronicle({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiGooglechronicleHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiGooglechronicleTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m2.719 4.812 4.812 3v4l-4.812 3Zm0 10 4.812-3v9.375l-3.914-2.389a1.875 1.875 0 0 1-.898-1.6ZM2.719 0h18.562v4.812H2.719Zm4.812 21.188 13.75-8.594v4.618c0 .626-.323 1.208-.854 1.539L12 24Z" />
    </Svg>
  );
}
