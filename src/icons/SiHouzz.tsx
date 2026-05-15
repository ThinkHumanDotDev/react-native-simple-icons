import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiHouzzHex = "4DBC15";
export const SiHouzzTitle = "Houzz";
export const SiHouzzSlug = "houzz";

export function SiHouzz({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiHouzzHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiHouzzTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M1.27 0V24H9.32V16.44H14.68V24H22.73V10.37L6.61 5.75V0H1.27Z" />
    </Svg>
  );
}
