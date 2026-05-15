import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiIndiehackersHex = "0E2439";
export const SiIndiehackersTitle = "Indie Hackers";
export const SiIndiehackersSlug = "indiehackers";

export function SiIndiehackers({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiIndiehackersHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiIndiehackersTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 0h24v24H0V0Zm5.4 17.2h2.4V6.8H5.4v10.4Zm4.8 0h2.4v-4h3.6v4h2.4V6.8h-2.4v4h-3.6v-4h-2.4v10.4Z" />
    </Svg>
  );
}
