import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiCoolifyHex = "6B16ED";
export const SiCoolifyTitle = "Coolify";
export const SiCoolifySlug = "coolify";

export function SiCoolify({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiCoolifyHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiCoolifyTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M4.364 4.364V0h17.454v4.364zm0 13.09H0V4.365h4.364zm0 0h17.454v4.364H4.364ZM6.545 6.546v-1.7H22.3V2.182H24v4.363zm0 0v10.4h-1.7v-10.4ZM3.882 17.936v1.7h-1.7v-1.7ZM24 24H6.545v-1.7H22.3v-2.664H24Z" />
    </Svg>
  );
}
