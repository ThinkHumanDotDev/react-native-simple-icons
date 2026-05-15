import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiWinampHex = "F93821";
export const SiWinampTitle = "Winamp";
export const SiWinampSlug = "winamp";

export function SiWinamp({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiWinampHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiWinampTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M11.902 0a.987.987 0 0 0-.91.604l-6.139 14.57c-.176.42.131.883.586.883H8.66a.987.987 0 0 0 .91-.604L15.707.883A.636.636 0 0 0 15.12 0h-3.219Zm3.438 7.943a.987.987 0 0 0-.91.604l-6.137 14.57c-.177.42.13.883.586.883h3.219a.987.987 0 0 0 .91-.604l6.138-14.57a.636.636 0 0 0-.586-.883h-3.22Z" />
    </Svg>
  );
}
