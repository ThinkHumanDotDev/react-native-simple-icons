import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiCommodoreHex = "1E2A4E";
export const SiCommodoreTitle = "Commodore";
export const SiCommodoreSlug = "commodore";

export function SiCommodore({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiCommodoreHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiCommodoreTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M11.202.798C5.016.798 0 5.814 0 12s5.016 11.202 11.202 11.202c1.094 0 2.153-.157 3.154-.45v-5.335a6.27 6.27 0 1 1 0-10.839v-5.33c-1-.293-2.057-.45-3.154-.45Zm3.375 6.343v4.304h5.27L24 7.14Zm-.037 5.377v4.304h9.423l-4.156-4.304z" />
    </Svg>
  );
}
