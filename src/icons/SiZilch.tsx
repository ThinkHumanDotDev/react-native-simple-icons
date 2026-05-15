import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiZilchHex = "00D287";
export const SiZilchTitle = "Zilch";
export const SiZilchSlug = "zilch";

export function SiZilch({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiZilchHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiZilchTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M4.421 6.149c3.292-2.011 6.584-4.036 9.862-6.046a.702.702 0 0 1 .83.073c1.312 1.18 2.637 2.36 3.948 3.54a.694.694 0 0 1 .175.815 1737.248 1737.248 0 0 1-4.341 9.338.61.61 0 0 0 .408.845c1.427.335 2.855.656 4.283.991a.546.546 0 0 1 .204.976c-3.234 2.375-6.483 4.749-9.717 7.124a.986.986 0 0 1-1.136.029l-4.633-3.016a.691.691 0 0 1-.248-.888c1.326-2.812 2.666-5.623 3.992-8.421a.78.78 0 0 0-.146-.859 802.196 802.196 0 0 0-3.583-3.569c-.277-.262-.219-.729.102-.932Z" />
    </Svg>
  );
}
