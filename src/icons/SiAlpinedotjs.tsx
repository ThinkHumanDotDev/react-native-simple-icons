import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiAlpinedotjsHex = "8BC0D0";
export const SiAlpinedotjsTitle = "Alpine.js";
export const SiAlpinedotjsSlug = "alpinedotjs";

export function SiAlpinedotjs({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiAlpinedotjsHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiAlpinedotjsTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m24 12-5.72 5.746-5.724-5.741 5.724-5.75L24 12zM5.72 6.254 0 12l5.72 5.746h11.44L5.72 6.254z" />
    </Svg>
  );
}
