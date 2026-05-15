import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiLudwigHex = "FFFFFF";
export const SiLudwigTitle = "Ludwig";
export const SiLudwigSlug = "ludwig";

export function SiLudwig({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiLudwigHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiLudwigTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 0h24v24H0V0Zm13.714 10.286V3.429h-3.428v10.285H20.57V3.43h-3.428v6.857h-3.429Zm-6.857 6.857V3.429H3.43V20.57h17.14v-3.428H6.857Z" />
    </Svg>
  );
}
