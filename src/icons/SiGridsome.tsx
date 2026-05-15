import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiGridsomeHex = "00A672";
export const SiGridsomeTitle = "Gridsome";
export const SiGridsomeSlug = "gridsome";

export function SiGridsome({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiGridsomeHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiGridsomeTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12.026.017l-.108.001C4.905.135-.102 5.975.002 11.956.025 19.286 6.02 24.13 12.083 23.98c7.208-.2 12.323-6.461 11.892-12.05a2.197 2.197 0 0 0-2.192-2.001h-3.15a2.155 2.155 0 0 0-2.161 2.147c0 1.187.967 2.148 2.16 2.148h.788c-.87 2.791-3.62 5.455-7.44 5.56-3.803.095-7.61-2.904-7.768-7.569a2.173 2.173 0 0 0 0-.159c-.148-3.72 2.895-7.637 7.88-7.845a2.096 2.096 0 0 0 2.003-2.183 2.095 2.095 0 0 0-2.07-2.011zm-.018 9.911a2.15 2.15 0 0 0-2.146 2.151 2.15 2.15 0 0 0 2.146 2.152 2.15 2.15 0 0 0 2.147-2.152 2.15 2.15 0 0 0-2.147-2.15Z" />
    </Svg>
  );
}
