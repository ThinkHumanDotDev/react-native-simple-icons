import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiLinuxfoundationHex = "003778";
export const SiLinuxfoundationTitle = "Linux Foundation";
export const SiLinuxfoundationSlug = "linuxfoundation";

export function SiLinuxfoundation({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiLinuxfoundationHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiLinuxfoundationTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M4.8 19.2h9.6V24H0V9.6h4.8v9.6zM0 0v7.2h4.8V4.822h14.4V19.2h-2.4V24H24V0H0z" />
    </Svg>
  );
}
