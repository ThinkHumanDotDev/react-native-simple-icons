import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiDevelopmentcontainersHex = "2753E3";
export const SiDevelopmentcontainersTitle = "Development Containers";
export const SiDevelopmentcontainersSlug = "developmentcontainers";

export function SiDevelopmentcontainers({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiDevelopmentcontainersHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiDevelopmentcontainersTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M10.31.615a4.5 4.5 0 0 1 3.382 0l8.998 3.648A2.1 2.1 0 0 1 24 6.208v11.584a2.1 2.1 0 0 1-1.311 1.946l-8.998 3.648a4.5 4.5 0 0 1-3.382 0l-8.998-3.648A2.1 2.1 0 0 1 0 17.792V6.208a2.1 2.1 0 0 1 1.311-1.946Zm2.705 1.668a2.7 2.7 0 0 0-2.028 0l-9 3.647a.3.3 0 0 0-.187.278v11.584a.3.3 0 0 0 .187.278l8.999 3.648a2.7 2.7 0 0 0 2.028 0l8.999-3.648a.3.3 0 0 0 .187-.278V6.208a.3.3 0 0 0-.187-.278ZM6.019 6.658 12 8.928l5.98-2.27c1.122-.427 1.762 1.256.64 1.683l-5.72 2.17V17.1c0 1.2-1.8 1.2-1.8 0v-6.59L5.38 8.34c-1.122-.426-.482-2.109.64-1.683" />
    </Svg>
  );
}
