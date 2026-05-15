import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiWhat3WordsHex = "E11F26";
export const SiWhat3WordsTitle = "what3words";
export const SiWhat3WordsSlug = "what3words";

export function SiWhat3Words({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiWhat3WordsHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiWhat3WordsTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 0v24h24V0zm13.515 6.75a.75.75 0 0 1 .696.987l-3 9a.75.75 0 0 1-.711.513.75.75 0 0 1-.712-.987l3-9a.75.75 0 0 1 .727-.513zm-4.499.002a.75.75 0 0 1 .695.985l-3 9A.75.75 0 0 1 6 17.25a.75.75 0 0 1-.712-.987l3-9a.75.75 0 0 1 .728-.511zm9 0a.75.75 0 0 1 .695.985l-3 9a.75.75 0 0 1-.711.513.75.75 0 0 1-.712-.987l3-9a.75.75 0 0 1 .728-.511z" />
    </Svg>
  );
}
