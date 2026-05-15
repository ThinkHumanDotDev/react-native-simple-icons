import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiKoyebHex = "121212";
export const SiKoyebTitle = "Koyeb";
export const SiKoyebSlug = "koyeb";

export function SiKoyeb({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiKoyebHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiKoyebTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 12.822V7.044L11.985.115 24 7.037v5.77L11.992 5.892Zm11.985 1.114L1.92 19.759 0 18.645v-3.557l11.985-6.93L24 15.089v3.542l-1.92 1.13Zm-3.028 9.949L3.95 21.004l8.036-4.656 8.066 4.656-5.009 2.88-3.05-1.759Z" />
    </Svg>
  );
}
