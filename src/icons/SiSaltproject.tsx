import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiSaltprojectHex = "57BCAD";
export const SiSaltprojectTitle = "Salt Project";
export const SiSaltprojectSlug = "saltproject";

export function SiSaltproject({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiSaltprojectHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiSaltprojectTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 12v10.56h12L18 12h6V1.44H12L6 12Z" />
    </Svg>
  );
}
