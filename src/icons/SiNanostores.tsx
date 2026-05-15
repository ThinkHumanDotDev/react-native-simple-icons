import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiNanostoresHex = "000000";
export const SiNanostoresTitle = "Nano Stores";
export const SiNanostoresSlug = "nanostores";

export function SiNanostores({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiNanostoresHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiNanostoresTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M13.708 24 .6 14.822l7.679-2.995 11.235 7.867L13.708 24ZM10.292 0 23.4 9.178l-7.679 2.995L4.486 4.306 10.292 0Z" />
    </Svg>
  );
}
