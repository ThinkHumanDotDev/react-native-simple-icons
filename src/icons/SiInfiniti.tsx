import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiInfinitiHex = "020B24";
export const SiInfinitiTitle = "INFINITI";
export const SiInfinitiSlug = "infiniti";

export function SiInfiniti({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiInfinitiHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiInfinitiTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M1.953 11.643c0 1.51 1.83 2.69 4.601 3.344l4.841-5.523H12l-4.19 8.06C3.25 16.744 0 14.71 0 12.233c0-3.184 5.376-5.757 12-5.757s12 2.573 12 5.757c0 2.477-3.25 4.511-7.81 5.293L12 9.464h.605l4.84 5.523c2.772-.654 4.601-1.834 4.601-3.344 0-2.664-4.484-4.88-10.047-4.88-5.562 0-10.046 2.216-10.046 4.88z" />
    </Svg>
  );
}
