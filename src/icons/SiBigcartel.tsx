import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiBigcartelHex = "222222";
export const SiBigcartelTitle = "Big Cartel";
export const SiBigcartelSlug = "bigcartel";

export function SiBigcartel({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiBigcartelHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiBigcartelTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12 13.068v-1.006c0-.63.252-1.256.88-1.508l7.79-4.9c.503-.252.755-.88.755-1.51V0L12 6.03 2.575 0v12.69c0 3.394 1.51 6.284 4.02 7.917L11.875 24l5.28-3.393c2.513-1.51 4.02-4.398 4.02-7.916V7.036L12 13.068z" />
    </Svg>
  );
}
