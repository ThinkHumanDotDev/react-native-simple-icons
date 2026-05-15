import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiMozillaHex = "161616";
export const SiMozillaTitle = "Mozilla";
export const SiMozillaSlug = "mozilla";

export function SiMozilla({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiMozillaHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiMozillaTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M4.819 24H1.75V0H4.82zM7.33 12.242H19.48v-.69L11.562 8.67V6.25l7.918-2.872v-.7H10.1V0h12.149v4.89l-6.445 2.224v.69l6.445 2.224v4.89H7.33zm0-9.565h2.77v2.77H7.33z" />
    </Svg>
  );
}
