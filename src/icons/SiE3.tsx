import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiE3Hex = "E73D2F";
export const SiE3Title = "E3";
export const SiE3Slug = "e3";

export function SiE3({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiE3Hex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiE3Title}
      {...props}
    >
      <Path fill={resolvedColor} d="M11.0676 16.5185H4.7723v-2.6738h6.2615v-3.757H4.7723v-2.64h6.2615V3.691H0v16.6184h14.1476c0-.0339-2.7754-.7108-3.08-3.7908zm10.12-6.3969c1.8954 1.2862 2.8769 2.5385 2.8092 5.1108-.0677 2.6738-2.7754 5.043-5.72 5.043-2.0984 0-4.7723-.9477-5.7876-3.7569l3.4861-1.5569c.4738.88 1.1508 1.557 2.2 1.557 1.1507 0 1.9969-.88 2.0984-1.997.0339-.2708-.1353-2.2338-2.0984-2.3015l-2.2-.237 2.8092-4.5353h-6.3292v-3.757h11.5415z" />
    </Svg>
  );
}
