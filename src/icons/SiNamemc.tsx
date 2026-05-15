import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiNamemcHex = "12161A";
export const SiNamemcTitle = "NameMC";
export const SiNamemcSlug = "namemc";

export function SiNamemc({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiNamemcHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiNamemcTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 0v24h24V0Zm4.8 4.8H16V8h3.2v11.2H16V8H8v11.2H4.8V8Z" />
    </Svg>
  );
}
