import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiVibloHex = "5387C6";
export const SiVibloTitle = "Viblo";
export const SiVibloSlug = "viblo";

export function SiViblo({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiVibloHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiVibloTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M10.569 19.68h2.904L21.621.018 18.705 0l-4.428 10.668H9.705L5.295 0H2.379l8.19 19.68zm-7.02 1.854h16.908V24H3.549v-2.466z" />
    </Svg>
  );
}
