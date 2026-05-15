import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiSquareenixHex = "ED1C24";
export const SiSquareenixTitle = "Square Enix";
export const SiSquareenixSlug = "squareenix";

export function SiSquareenix({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiSquareenixHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiSquareenixTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M1.723 0v24h20.554v-4.496H7.037V4.088h15.006V0zm9.751 9.46v4.497h8.584V9.459z" />
    </Svg>
  );
}
