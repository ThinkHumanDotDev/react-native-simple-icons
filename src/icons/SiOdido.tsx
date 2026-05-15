import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiOdidoHex = "2C72FF";
export const SiOdidoTitle = "Odido";
export const SiOdidoSlug = "odido";

export function SiOdido({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiOdidoHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiOdidoTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M20.923 15.077a3.077 3.077 0 1 0 0-6.154 3.077 3.077 0 0 0 0 6.154m-17.846 0a3.077 3.077 0 1 0 0-6.154 3.077 3.077 0 0 0 0 6.154m3.692 0a3.077 3.077 0 0 0 0-6.154zm10.462 0a3.077 3.077 0 0 1 0-6.154zm-3.693-6.154h-3.077v6.154h3.077z" />
    </Svg>
  );
}
