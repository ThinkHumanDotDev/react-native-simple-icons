import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiEslgamingHex = "FFFF09";
export const SiEslgamingTitle = "ESLGaming";
export const SiEslgamingSlug = "eslgaming";

export function SiEslgaming({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiEslgamingHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiEslgamingTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12s12-5.372 12-12c0-6.627-5.373-12-12-12zm.455 2.163a9.8 9.8 0 0 1 5.789 2.222L4.384 18.244a9.862 9.862 0 0 1-1.06-1.582zm7.191 3.632a9.802 9.802 0 0 1 2.192 5.806l-14.45 9.1a9.834 9.834 0 0 1-1.592-1.055zm1.979 8.292c-.888 4.45-5.619 8.892-11.9 7.494Z" />
    </Svg>
  );
}
