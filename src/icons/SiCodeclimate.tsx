import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiCodeclimateHex = "000000";
export const SiCodeclimateTitle = "Code Climate";
export const SiCodeclimateSlug = "codeclimate";

export function SiCodeclimate({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiCodeclimateHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiCodeclimateTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M16.125 5.272l-4.511 4.475 2.684 2.659 1.827-1.813 5.19 5.145L24 13.079zM8.13 8.265L0 16.066l2.772 2.662 5.357-5.145 5.357 5.145 2.772-2.662z" />
    </Svg>
  );
}
