import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiScrollrevealHex = "FFCB36";
export const SiScrollrevealTitle = "ScrollReveal";
export const SiScrollrevealSlug = "scrollreveal";

export function SiScrollreveal({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiScrollrevealHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiScrollrevealTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M1.714 2.857A1.71 1.71 0 0 0 0 4.571v6.858c0 .95.765 1.714 1.714 1.714a1.71 1.71 0 0 0 1.715-1.714V4.57a1.71 1.71 0 0 0-1.715-1.714zm6.857 0a1.71 1.71 0 0 0-1.714 1.714v1.143c0 .95.765 1.715 1.714 1.715a1.71 1.71 0 0 0 1.715-1.715V4.571A1.71 1.71 0 0 0 8.57 2.857zm6.858 0a1.71 1.71 0 0 0-1.715 1.714V19.43c0 .95.765 1.714 1.715 1.714a1.71 1.71 0 0 0 1.714-1.714V4.57a1.71 1.71 0 0 0-1.714-1.714zm6.857 0a1.71 1.71 0 0 0-1.715 1.714v6.858c0 .95.765 1.714 1.715 1.714A1.71 1.71 0 0 0 24 11.429V4.57a1.71 1.71 0 0 0-1.714-1.714zm-13.715 8a1.71 1.71 0 0 0-1.714 1.714v6.858c0 .95.765 1.714 1.714 1.714a1.71 1.71 0 0 0 1.715-1.714V12.57a1.71 1.71 0 0 0-1.715-1.714zm-6.857 5.714A1.71 1.71 0 0 0 0 18.286v1.143c0 .95.765 1.714 1.714 1.714a1.71 1.71 0 0 0 1.715-1.714v-1.143a1.71 1.71 0 0 0-1.715-1.715zm20.572 0a1.71 1.71 0 0 0-1.715 1.715v1.143c0 .95.765 1.714 1.715 1.714A1.71 1.71 0 0 0 24 19.429v-1.143a1.71 1.71 0 0 0-1.714-1.715Z" />
    </Svg>
  );
}
