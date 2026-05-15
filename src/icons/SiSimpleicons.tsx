import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiSimpleiconsHex = "111111";
export const SiSimpleiconsTitle = "Simple Icons";
export const SiSimpleiconsSlug = "simpleicons";

export function SiSimpleicons({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiSimpleiconsHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiSimpleiconsTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M18 6a6 6 0 10-6 6 6 6 0 015.35 9h1.5A7.5 7.5 0 0012 10.5 4.5 4.5 0 1116.5 6Zm-6-3a3 3 0 000 6 1 1 0 000-6m0 1.5a1.5 1.5 0 010 3 1 1 0 010-3M7.5 15v1.5H9v6H4.5V24h15v-1.5H15v-6h1.5V15Zm3 1.5h3v6h-3zm-6 1.5a7.5 7.5 0 00.7 3h1.5a6 6 0 01-.7-3Z" />
    </Svg>
  );
}
