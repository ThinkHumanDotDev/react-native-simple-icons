import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiPolymerprojectHex = "FF4470";
export const SiPolymerprojectTitle = "Polymer Project";
export const SiPolymerprojectSlug = "polymerproject";

export function SiPolymerproject({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiPolymerprojectHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiPolymerprojectTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M14.4 3.686L7.2 16.16 4.8 12l4.8-8.314H4.8L0 12l2.4 4.159 2.4 4.155h4.8l7.2-12.469L19.2 12l-4.8 8.314h4.8l2.4-4.155L24 12l-2.4-4.155-2.4-4.159Z" />
    </Svg>
  );
}
