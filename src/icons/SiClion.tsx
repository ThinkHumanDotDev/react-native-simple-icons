import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiClionHex = "000000";
export const SiClionTitle = "CLion";
export const SiClionSlug = "clion";

export function SiClion({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiClionHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiClionTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 0v24h24V0H0zm7.041 3a5.049 5.049 0 0 1 .219 0c1.86 0 3 .6 3.9 1.56L9.78 6.18C9 5.46 8.22 5.04 7.26 5.04c-1.68 0-2.88 1.38-2.88 3.12 0 1.68 1.2 3.12 2.88 3.12 1.14 0 1.86-.48 2.64-1.14l1.38 1.38c-1.02 1.08-2.16 1.8-4.08 1.8a5.1 5.1 0 0 1-5.1-5.16A5.049 5.049 0 0 1 7.04 3zm5.738.12H15v8.1h4.32v1.86h-6.54V3.12zM2.28 19.5h9V21h-9v-1.5Z" />
    </Svg>
  );
}
