import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiUnsplashHex = "000000";
export const SiUnsplashTitle = "Unsplash";
export const SiUnsplashSlug = "unsplash";

export function SiUnsplash({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiUnsplashHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiUnsplashTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v6.75h9V10.5z" />
    </Svg>
  );
}
