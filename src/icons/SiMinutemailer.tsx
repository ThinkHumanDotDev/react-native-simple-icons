import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiMinutemailerHex = "30B980";
export const SiMinutemailerTitle = "Minutemailer";
export const SiMinutemailerSlug = "minutemailer";

export function SiMinutemailer({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiMinutemailerHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiMinutemailerTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M17.187 19.181L24 4.755 0 12.386l9.196 1.963.043 4.896 2.759-2.617-2.147-2.076 7.336 4.63z" />
    </Svg>
  );
}
