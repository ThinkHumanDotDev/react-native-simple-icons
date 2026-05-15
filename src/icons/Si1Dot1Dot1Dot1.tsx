import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const Si1Dot1Dot1Dot1Hex = "221E68";
export const Si1Dot1Dot1Dot1Title = "1.1.1.1";
export const Si1Dot1Dot1Dot1Slug = "1dot1dot1dot1";

export function Si1Dot1Dot1Dot1({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${Si1Dot1Dot1Dot1Hex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? Si1Dot1Dot1Dot1Title}
      {...props}
    >
      <Path fill={resolvedColor} d="M5.389 0A5.377 5.377 0 0 0 0 5.389V18.61A5.377 5.377 0 0 0 5.389 24H18.61A5.377 5.377 0 0 0 24 18.611V5.39A5.377 5.377 0 0 0 18.611 0Zm11.546 4.595h.942v3.122h.69v.868h-.69v1.201h-1.001V8.585H14.68v-.964zm-6.07.589h2.523v14.842h-3.094V9.79H6.68V7.805c.95-.042 1.616-.103 1.997-.184.606-.13 1.1-.39 1.48-.779.26-.266.457-.62.592-1.064.077-.267.116-.464.116-.594Zm5.989.73L15.513 7.72h1.365V5.915Z" />
    </Svg>
  );
}
