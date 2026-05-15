import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiVuedotjsHex = "4FC08D";
export const SiVuedotjsTitle = "Vue.js";
export const SiVuedotjsSlug = "vuedotjs";

export function SiVuedotjs({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiVuedotjsHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiVuedotjsTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z" />
    </Svg>
  );
}
