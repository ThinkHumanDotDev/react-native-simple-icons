import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiAwesomewmHex = "535D6C";
export const SiAwesomewmTitle = "awesomeWM";
export const SiAwesomewmSlug = "awesomewm";

export function SiAwesomewm({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiAwesomewmHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiAwesomewmTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 24V8.25h16.5V7.5H0V0h24v24h-7.5v-8.25h-9v.75h8.25V24z" />
    </Svg>
  );
}
