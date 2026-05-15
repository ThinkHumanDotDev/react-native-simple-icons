import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiSucklessHex = "1177AA";
export const SiSucklessTitle = "suckless";
export const SiSucklessSlug = "suckless";

export function SiSuckless({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiSucklessHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiSucklessTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 4h24v4H4v2h20v10H0v-4h20v-2H0z" />
    </Svg>
  );
}
