import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiScrimbaHex = "2B283A";
export const SiScrimbaTitle = "Scrimba";
export const SiScrimbaSlug = "scrimba";

export function SiScrimba({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiScrimbaHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiScrimbaTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M24 6.222a2.222 2.222 0 01-2.222 2.222h-8.89a2.222 2.222 0 010-4.444h8.89C23.005 4 24 4.995 24 6.222zm-7.333 9.334h-8.89a2.222 2.222 0 000 4.444h8.89a2.222 2.222 0 000-4.444zm0-5.778H13.11a2.222 2.222 0 000 4.444h3.556a2.222 2.222 0 000-4.444zM2.222 15.556a2.222 2.222 0 100 4.444 2.222 2.222 0 000-4.444z" />
    </Svg>
  );
}
