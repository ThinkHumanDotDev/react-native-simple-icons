import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiProsiebenHex = "E6000F";
export const SiProsiebenTitle = "ProSieben";
export const SiProsiebenSlug = "prosieben";

export function SiProsieben({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiProsiebenHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiProsiebenTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M.24 0H23.68V6.64H.24M23.76 7.92V24H.24s2.88-7.84 10.48-12.48c7.12-4.4 13.04-3.6 13.04-3.6Z" />
    </Svg>
  );
}
