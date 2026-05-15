import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiHexletHex = "116EF5";
export const SiHexletTitle = "Hexlet";
export const SiHexletSlug = "hexlet";

export function SiHexlet({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiHexletHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiHexletTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M16.732 7.099v6.422H7.268V7.099L4.563 6.085V24h2.705v-7.775h9.464V24h2.705V6.085l-2.705 1.014Zm3.043-4.057L12 0 4.225 3.042 12 5.746l7.775-2.704Z" />
    </Svg>
  );
}
