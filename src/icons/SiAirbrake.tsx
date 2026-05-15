import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiAirbrakeHex = "FFA500";
export const SiAirbrakeTitle = "Airbrake";
export const SiAirbrakeSlug = "airbrake";

export function SiAirbrake({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiAirbrakeHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiAirbrakeTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M15.815.576 24 23.424h-6.072L10.679.576Zm-6.456 0 1.872 5.929-2.447 7.751c1.038.183 2.09.28 3.144.288.576 0 1.175-.048 1.824-.096l1.151 3.912a28.7 28.7 0 0 1-2.951.169 26.568 26.568 0 0 1-4.32-.361L5.88 23.424H0L8.181.576Z" />
    </Svg>
  );
}
