import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiNetappHex = "0067C5";
export const SiNetappTitle = "NetApp";
export const SiNetappSlug = "netapp";

export function SiNetapp({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiNetappHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiNetappTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 2v20h9.33V10h5.34v12H24V2Z" />
    </Svg>
  );
}
