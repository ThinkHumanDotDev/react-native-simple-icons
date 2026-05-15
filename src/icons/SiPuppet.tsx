import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiPuppetHex = "FFAE1A";
export const SiPuppetTitle = "Puppet";
export const SiPuppetSlug = "puppet";

export function SiPuppet({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiPuppetHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiPuppetTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M8.984 21.611H6.595v-2.388h2.39zM6.595 2.39h2.39v2.388h-2.39zm13.198 6.028h-5.48l.001-.002-2.941-2.941V0H4.207v7.166h5.48l2.938 2.938.002-.001v3.794l-.003-.003-2.94 2.94H4.207V24h7.166v-5.477l2.94-2.94h5.48V8.417" />
    </Svg>
  );
}
