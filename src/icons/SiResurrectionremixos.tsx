import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiResurrectionremixosHex = "000000";
export const SiResurrectionremixosTitle = "Resurrection Remix OS";
export const SiResurrectionremixosSlug = "resurrectionremixos";

export function SiResurrectionremixos({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiResurrectionremixosHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiResurrectionremixosTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M24 3.53l-9.952.078C9.142 3.647 6.994 8.265 0 16.345c1.569.753 3.323 1.24 4.338.119 1.703-1.883 4.275-5.48 7.154-8.346 1.793-1.784 6.01-.865 9.95-1.23 1.351-.125 2.41-2.48 2.558-3.359zm-.147 6.076l-7.326.044c-4.39 0-5.38 2.492-11.91 10.24 1.194.563 3.28.84 3.763.257 1.78-2.158 2.506-3.51 5.36-6.362 1.657-1.658 4.39-.687 7.86-1.01 1.267-.12 2.132-2.449 2.253-3.169z" />
    </Svg>
  );
}
