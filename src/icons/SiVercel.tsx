import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiVercelHex = "000000";
export const SiVercelTitle = "Vercel";
export const SiVercelSlug = "vercel";

export function SiVercel({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiVercelHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiVercelTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m12 1.608 12 20.784H0Z" />
    </Svg>
  );
}
