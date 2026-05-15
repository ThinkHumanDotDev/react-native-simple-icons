import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiBulmaHex = "00D1B2";
export const SiBulmaTitle = "Bulma";
export const SiBulmaSlug = "bulma";

export function SiBulma({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiBulmaHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiBulmaTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M11.25 0l-6 6 -1.5 10.5 7.5 7.5 9 -6 -6 -6 4.5 -4.5 -7.5 -7.5Z" />
    </Svg>
  );
}
