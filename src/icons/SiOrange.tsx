import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiOrangeHex = "FF7900";
export const SiOrangeTitle = "Orange";
export const SiOrangeSlug = "orange";

export function SiOrange({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiOrangeHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiOrangeTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 0h24v24H0V0Zm3.43 20.572h17.143v-3.429H3.43v3.429Z" />
    </Svg>
  );
}
