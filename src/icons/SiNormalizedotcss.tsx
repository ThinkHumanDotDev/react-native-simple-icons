import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiNormalizedotcssHex = "E3695F";
export const SiNormalizedotcssTitle = "Normalize.css";
export const SiNormalizedotcssSlug = "normalizedotcss";

export function SiNormalizedotcss({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiNormalizedotcssHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiNormalizedotcssTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M8.427 6.361v5.064l-5.381.705 7.058.924v-1.915l5.469 6.5v-5.064l5.382-.705-7.059-.924v1.914zM12 0l12 12-12 12L0 12Z" />
    </Svg>
  );
}
