import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiIcons8Hex = "1FB141";
export const SiIcons8Title = "Icons8";
export const SiIcons8Slug = "icons8";

export function SiIcons8({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiIcons8Hex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiIcons8Title}
      {...props}
    >
      <Path fill={resolvedColor} d="M12 0H0v24h12zM18 12c3.3137 0 6-2.6863 6-6s-2.6863-6-6-6-6 2.6863-6 6 2.6863 6 6 6zM18 24c3.3137 0 6-2.6863 6-6s-2.6863-6-6-6-6 2.6863-6 6 2.6863 6 6 6z" />
    </Svg>
  );
}
