import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiMarkoHex = "2596BE";
export const SiMarkoTitle = "Marko";
export const SiMarkoSlug = "marko";

export function SiMarko({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiMarkoHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiMarkoTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M15.4 5.46h-3.39l-2.3 3.77L7.4 5.46H4l-4 6.55 4 6.53h3.39l-4-6.54L5.7 8.23 8.01 12h3.39l2.31-3.78L16.03 12l-4.01 6.54h3.39l4-6.54zm4.6 0h-3.39l4 6.54-4.01 6.54h3.39L24 12z" />
    </Svg>
  );
}
