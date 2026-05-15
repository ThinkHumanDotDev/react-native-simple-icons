import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiAdventofcodeHex = "FFFF66";
export const SiAdventofcodeTitle = "Advent Of Code";
export const SiAdventofcodeSlug = "adventofcode";

export function SiAdventofcode({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiAdventofcodeHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiAdventofcodeTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m14.05 13.236 6.498 9.606L18.91 24l-6.905-9.47L5.1 24l-1.637-1.158 6.498-9.606L.553 9.22l.615-1.69 9.596 3.463L11.087 0h1.826l.323 10.993 9.596-3.462.615 1.69-9.387 4.015z" />
    </Svg>
  );
}
