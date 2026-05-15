import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiKodularHex = "4527A0";
export const SiKodularTitle = "Kodular";
export const SiKodularSlug = "kodular";

export function SiKodular({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiKodularHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiKodularTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M3.612 0a5.6 5.6 0 0 1 5.6 5.6v4.934l2.44-2.44a4.48 4.48 0 0 1 6.336 0l-6.095 6.096 8.495 8.495a4.48 4.48 0 0 1-6.336 0l-4.84-4.84V24a5.6 5.6 0 0 1-5.6-5.6Z" />
    </Svg>
  );
}
