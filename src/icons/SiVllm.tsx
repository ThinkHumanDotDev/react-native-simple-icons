import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiVllmHex = "30A2FF";
export const SiVllmTitle = "vLLM";
export const SiVllmSlug = "vllm";

export function SiVllm({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiVllmHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiVllmTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m23.6 0-8.721 4.59L9.829 24h7.41zM9.83 24V5.142H.4Z" />
    </Svg>
  );
}
