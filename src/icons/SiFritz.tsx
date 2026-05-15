import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiFritzHex = "E2001A";
export const SiFritzTitle = "FRITZ!";
export const SiFritzSlug = "fritz";

export function SiFritz({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiFritzHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiFritzTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M13.495 19.183 17.37 24l4.817-3.903-3.875-4.817zM23.571.692 16.097.111l-.914 15.003 6.118.221zM6.962 5.564v4.097l5.62-.055v5.37H7.016v8.055H.43V.277L13.024 0V5.51z" />
    </Svg>
  );
}
