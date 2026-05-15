import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiKedroHex = "FFC900";
export const SiKedroTitle = "Kedro";
export const SiKedroSlug = "kedro";

export function SiKedro({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiKedroHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiKedroTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m12 0 12 12-12 12L0 12 12 0z" />
    </Svg>
  );
}
