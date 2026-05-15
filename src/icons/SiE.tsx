import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiEHex = "000000";
export const SiETitle = "/e/";
export const SiESlug = "e";

export function SiE({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiEHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiETitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M.004 12.004A12.012 12.012 0 0 0 12 24a2.27 2.27 0 0 0 2.266-2.266A2.27 2.27 0 0 0 12 19.467c-4.116 0-7.463-3.347-7.463-7.463S7.884 4.541 12 4.541c3.323 0 6.15 2.186 7.111 5.197H12a2.27 2.27 0 0 0-2.266 2.266A2.27 2.27 0 0 0 12 14.27h9.73a2.27 2.27 0 0 0 2.266-2.266A12.02 12.02 0 0 0 12 0C5.385.008.004 5.39.004 12.004" />
    </Svg>
  );
}
