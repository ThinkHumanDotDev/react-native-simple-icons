import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiAnytypeHex = "FF6A7B";
export const SiAnytypeTitle = "Anytype";
export const SiAnytypeSlug = "anytype";

export function SiAnytype({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiAnytypeHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiAnytypeTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M5.333 0h13.334A5.322 5.322 0 0 1 24 5.333v13.334A5.322 5.322 0 0 1 18.667 24H5.333A5.322 5.322 0 0 1 0 18.667V5.333A5.322 5.322 0 0 1 5.333 0Zm10.334 7.667v-3H6.344v3zm0 0v11.666h3V7.667ZM9.5 19.333a4.833 4.833 0 1 0 0-9.666 4.833 4.833 0 0 0 0 9.666z" />
    </Svg>
  );
}
