import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiExpertsexchangeHex = "00AAE7";
export const SiExpertsexchangeTitle = "Experts Exchange";
export const SiExpertsexchangeSlug = "expertsexchange";

export function SiExpertsexchange({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiExpertsexchangeHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiExpertsexchangeTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M7.28.9H0L8.36 12 0 23.1h7.28L15.64 12zM24 .9h-7.28l-2.3 3.06 3.64 4.82zM14.42 20.05l2.3 3.05H24l-5.94-7.88z" />
    </Svg>
  );
}
