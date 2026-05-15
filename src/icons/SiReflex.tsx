import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiReflexHex = "6E56CF";
export const SiReflexTitle = "Reflex";
export const SiReflexSlug = "reflex";

export function SiReflex({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiReflexHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiReflexTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M17 15v9h5v-9zM2 0v24h5v-9h10v-5H7V5h10v5h5V0z" />
    </Svg>
  );
}
