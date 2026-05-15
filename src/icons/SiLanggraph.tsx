import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiLanggraphHex = "7FC8FF";
export const SiLanggraphTitle = "LangGraph";
export const SiLanggraphSlug = "langgraph";

export function SiLanggraph({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiLanggraphHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiLanggraphTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M5 19H10A5 5 0 115 14ZM19 14A5 5 0 1114 19H19ZM10 5A5 5 0 105 10V5ZM19 5V10A5 5 0 1014 5Z" />
    </Svg>
  );
}
