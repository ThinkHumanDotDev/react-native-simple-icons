import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiMonoprixHex = "FB1911";
export const SiMonoprixTitle = "Monoprix";
export const SiMonoprixSlug = "monoprix";

export function SiMonoprix({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiMonoprixHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiMonoprixTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M21.072 8.042C21.072 3.612 16.981 0 12 0 6.991 0 2.928 3.612 2.928 8.042S6.99 16.085 12 16.085c.282 0 .564-.029.847-.043.62.339.747.706.761.988.142 1.608-2.44 5.08-4.303 6.49l.254.48c.113-.028 10.723-3.47 11.429-15.026.056-.283.07-.565.084-.875v-.043z" />
    </Svg>
  );
}
