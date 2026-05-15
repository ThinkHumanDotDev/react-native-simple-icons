import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiSunriseHex = "DA291C";
export const SiSunriseTitle = "Sunrise";
export const SiSunriseSlug = "sunrise";

export function SiSunrise({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiSunriseHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiSunriseTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12.0011 0A12 12 0 1 0 24 11.9989 12.0114 12.0114 0 0 0 12.0012 0m0 2.4639a9.53 9.53 0 0 1 9.5134 8.8891 9.53 9.53 0 0 1-.8622 4.6487H3.349a9.53 9.53 0 0 1 .6162-9.14 9.53 9.53 0 0 1 8.036-4.398" />
    </Svg>
  );
}
