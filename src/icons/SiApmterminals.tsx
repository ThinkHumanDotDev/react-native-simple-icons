import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiApmterminalsHex = "FF6441";
export const SiApmterminalsTitle = "APM Terminals";
export const SiApmterminalsSlug = "apmterminals";

export function SiApmterminals({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiApmterminalsHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiApmterminalsTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M23.8 2.95 0 16.55v4.5L24 9.32V2.95zm.2 10.1-8.87 4.21v3.68l8.87-3.4Z" />
    </Svg>
  );
}
