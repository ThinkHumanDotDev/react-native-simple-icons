import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiAlacrittyHex = "F46D01";
export const SiAlacrittyTitle = "Alacritty";
export const SiAlacrittySlug = "alacritty";

export function SiAlacritty({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiAlacrittyHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiAlacrittyTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m10.065 0-8.57 21.269h3.595l6.91-16.244 6.91 16.244h3.594l-8.57-21.269zm1.935 9.935c-0.76666 1.8547-1.5334 3.7094-2.298 5.565 1.475 4.54 1.475 4.54 2.298 8.5 0.823-3.96 0.823-3.96 2.297-8.5-0.76637-1.8547-1.5315-3.7099-2.297-5.565z" />
    </Svg>
  );
}
