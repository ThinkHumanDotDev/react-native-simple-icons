import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiDash0Hex = "EA3D3B";
export const SiDash0Title = "Dash0";
export const SiDash0Slug = "dash0";

export function SiDash0({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiDash0Hex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiDash0Title}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 4.421c4.883 0 8.842 3.393 8.842 7.579S4.883 19.579 0 19.579zm16.421 0C20.608 4.421 24 7.814 24 12s-3.392 7.579-7.579 7.579S8.842 16.186 8.842 12s3.393-7.579 7.579-7.579" />
    </Svg>
  );
}
