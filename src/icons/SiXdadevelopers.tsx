import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiXdadevelopersHex = "EA7100";
export const SiXdadevelopersTitle = "XDA Developers";
export const SiXdadevelopersSlug = "xdadevelopers";

export function SiXdadevelopers({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiXdadevelopersHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiXdadevelopersTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M13.84 3.052V0h7.843v17.583H13.84v-3.024h4.591V3.052zM5.569 14.53V3.024h4.592V0H2.318v17.583H6.98L10.16 24v-9.483z" />
    </Svg>
  );
}
