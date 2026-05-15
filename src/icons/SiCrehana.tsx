import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiCrehanaHex = "4B22F4";
export const SiCrehanaTitle = "Crehana";
export const SiCrehanaSlug = "crehana";

export function SiCrehana({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiCrehanaHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiCrehanaTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12,0C5.371,0,0,5.371,0,12c0,6.626,5.371,12,12,12s12-5.374,12-12C24,5.371,18.626,0,12,0z M17.94,9.843v7.915h-3.957 v-3.892h-3.895v3.83H6.13v-3.957h3.833V9.843H6.06V5.948h3.957v3.895h3.965V5.948h3.957V9.843z" />
    </Svg>
  );
}
