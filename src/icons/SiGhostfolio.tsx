import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiGhostfolioHex = "36CFCC";
export const SiGhostfolioTitle = "Ghostfolio";
export const SiGhostfolioSlug = "ghostfolio";

export function SiGhostfolio({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiGhostfolioHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiGhostfolioTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M11.983 0a9.375 9.375 0 0 0-9.358 9.375v13.062a.781.781 0 0 0 1.334.553l1.791-1.844 2.573 2.625c.305.305.8.305 1.105 0L12 21.146l2.573 2.625c.305.305.8.305 1.105 0l2.572-2.625 1.792 1.844a.781.781 0 0 0 1.333-.553V9.455c0-5.166-4.226-9.464-9.392-9.455m-3.89 12.5a2.346 2.346 0 0 1-2.343-2.344 2.346 2.346 0 0 1 2.344-2.344 2.346 2.346 0 0 1 2.344 2.344A2.346 2.346 0 0 1 8.094 12.5m7.814 0a2.346 2.346 0 0 1-2.344-2.344 2.346 2.346 0 0 1 2.344-2.344 2.346 2.346 0 0 1 2.343 2.344 2.346 2.346 0 0 1-2.343 2.344" />
    </Svg>
  );
}
