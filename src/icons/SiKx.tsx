import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiKxHex = "101820";
export const SiKxTitle = "KX";
export const SiKxSlug = "kx";

export function SiKx({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiKxHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiKxTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 5.873h3.59v12.254H0V5.873Zm11.746 0L7.65 12l4.097 6.127H7.65L3.59 12l4.06-6.127h4.097Zm12.254 0L19.903 12 24 18.127h-4.097l-2.03-3.045-2.03 3.045h-4.097L15.843 12l-4.097-6.127h4.097l2.03 3.082 2.03-3.082H24Z" />
    </Svg>
  );
}
