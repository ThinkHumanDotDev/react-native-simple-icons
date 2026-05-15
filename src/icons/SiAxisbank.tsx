import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiAxisbankHex = "971A4D";
export const SiAxisbankTitle = "Axis Bank";
export const SiAxisbankSlug = "axisbank";

export function SiAxisbank({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiAxisbankHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiAxisbankTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M11.978 1.596 0 22.404h7.453l8.265-14.369Zm.027 12.896 4.533 7.903H24l-4.533-7.903z" />
    </Svg>
  );
}
