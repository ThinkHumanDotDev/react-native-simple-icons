import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiTresoritHex = "00A9E2";
export const SiTresoritTitle = "Tresorit";
export const SiTresoritSlug = "tresorit";

export function SiTresorit({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiTresoritHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiTresoritTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12 0 1.636 6v12L12 24l10.364-6V6zM3.818 7.258 12 2.521l3.574 2.069-11.756 6.753zm16.364 9.484L12 21.48 3.82 16.742V13.86l13.938-8.006 2.425 1.404z" />
    </Svg>
  );
}
