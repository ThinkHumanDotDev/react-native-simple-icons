import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiQualtricsHex = "00B4EF";
export const SiQualtricsTitle = "Qualtrics";
export const SiQualtricsSlug = "qualtrics";

export function SiQualtrics({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiQualtricsHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiQualtricsTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M20.14 5.518l-2.695 9.538h-.034l-2.89-9.538H8.125l-2.19 3.893-2.318-3.893H.368l3.78 6.116L0 18.486h2.993l2.66-4.534 2.755 4.534h4.906v-8.99h.034q.102.564.195.966.093.402.175.744c.057.228.118.445.184.65.065.206.132.43.2.677l1.926 5.949h2.523l1.942-5.95q.213-.718.398-1.385a14.544 14.544 0 0 0 .32-1.506h.035v8.845H24V5.514zM7.373 11.651l3.383-5.616v11.118z" />
    </Svg>
  );
}
