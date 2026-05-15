import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiEseaHex = "0E9648";
export const SiEseaTitle = "ESEA";
export const SiEseaSlug = "esea";

export function SiEsea({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiEseaHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiEseaTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M14.054 2.767L8.95 9.511 0 9.65l5.832 4.47L1.042 21l8.491-4.088 5.711 4.322V14.12L24 9.796l-17.255 4.02a12.575 12.575 0 001.589-1.955 5.475 5.475 0 00.617-1.786l5.593-.15z" />
    </Svg>
  );
}
