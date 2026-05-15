import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiFacebookgamingHex = "005FED";
export const SiFacebookgamingTitle = "Facebook Gaming";
export const SiFacebookgamingSlug = "facebookgaming";

export function SiFacebookgaming({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiFacebookgamingHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiFacebookgamingTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 0v24h15.67v-7.35H7.35v-9.3H24V0zm8.33 15.68h8.32V24H24V8.32H8.33Z" />
    </Svg>
  );
}
