import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiMicrostrategyHex = "D9232E";
export const SiMicrostrategyTitle = "MicroStrategy";
export const SiMicrostrategySlug = "microstrategy";

export function SiMicrostrategy({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiMicrostrategyHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiMicrostrategyTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M9.095 2.572h5.827v18.856H9.096zM0 2.572h5.825v18.856H.001zm18.174 0v18.854H24V8.33z" />
    </Svg>
  );
}
