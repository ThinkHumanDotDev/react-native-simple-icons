import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiTrailforksHex = "FFCD00";
export const SiTrailforksTitle = "Trailforks";
export const SiTrailforksSlug = "trailforks";

export function SiTrailforks({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiTrailforksHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiTrailforksTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12 1.608 0 22.392h24zm-1.292 5.698h2.584v5.885l2.664 1.917v5.587h-2.204V16.05L12 14.788l-1.752 1.262v4.645H8.044v-5.587l2.664-1.917z" />
    </Svg>
  );
}
