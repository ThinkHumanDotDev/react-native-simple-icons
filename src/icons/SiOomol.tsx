import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiOomolHex = "0D1117";
export const SiOomolTitle = "OOMOL";
export const SiOomolSlug = "oomol";

export function SiOomol({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiOomolHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiOomolTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M17.176 14.888a.83.83 0 0 1 .832.83.83.83 0 0 1-.832.83.83.83 0 0 1-.832-.83.83.83 0 0 1 .832-.83M6.824 7.513a.83.83 0 0 1 .832.83.83.83 0 0 1-.832.83.83.83 0 0 1-.832-.83.83.83 0 0 1 .832-.83M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0M6.824 6.222c-1.174 0-2.126.95-2.126 2.12s.952 2.121 2.126 2.121A2.13 2.13 0 0 0 8.85 8.988h.932a1.57 1.57 0 0 1 1.571 1.567v2.95a2.86 2.86 0 0 0 2.865 2.858h.932a2.13 2.13 0 0 0 2.026 1.475c1.174 0 2.126-.949 2.126-2.12s-.952-2.12-2.126-2.12a2.13 2.13 0 0 0-2.026 1.475h-.932a1.57 1.57 0 0 1-1.571-1.567v-2.95a2.86 2.86 0 0 0-2.865-2.859H8.85a2.13 2.13 0 0 0-2.026-1.475" />
    </Svg>
  );
}
