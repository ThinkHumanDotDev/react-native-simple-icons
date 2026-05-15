import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiDmmHex = "000000";
export const SiDmmTitle = "DMM";
export const SiDmmSlug = "dmm";

export function SiDmm({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiDmmHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiDmmTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M9.525.46H0v23.08h11.545C17.284 23.54 24 20.916 24 12S16.026.46 9.525.46zm.646 15.073V8.34c1.746 0 4.4.079 4.4 3.582 0 3.58-2.553 3.611-4.4 3.611z" />
    </Svg>
  );
}
