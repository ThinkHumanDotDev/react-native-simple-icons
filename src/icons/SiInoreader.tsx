import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiInoreaderHex = "1875F3";
export const SiInoreaderTitle = "Inoreader";
export const SiInoreaderSlug = "inoreader";

export function SiInoreader({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiInoreaderHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiInoreaderTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0m3.6 4.8a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2" />
    </Svg>
  );
}
