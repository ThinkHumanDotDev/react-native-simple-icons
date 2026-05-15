import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiAirfranceHex = "002157";
export const SiAirfranceTitle = "Air France";
export const SiAirfranceSlug = "airfrance";

export function SiAirfrance({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiAirfranceHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiAirfranceTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M13.776 3.9L5.184 16.332C4.051 17.969 2.208 19.548 0 19.721v.379h9.552c2.544 0 4.397-1.656 5.616-3.48L24 3.9Z" />
    </Svg>
  );
}
