import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiGreatlearningHex = "0E39A9";
export const SiGreatlearningTitle = "Great Learning";
export const SiGreatlearningSlug = "greatlearning";

export function SiGreatlearning({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiGreatlearningHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiGreatlearningTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M14.373 0c-6.617 0-12 5.383-12 12s5.383 12 12 12h.856c.958-1.175 1.911-2.354 2.867-3.531h-3.723c-4.669 0-8.469-3.8-8.469-8.469 0-4.67 3.8-8.469 8.469-8.469h4.375L21.615 0Zm3.723 20.469 3.531-4.354v-6.013h-7.502l-2.861 3.533h6.832z" />
    </Svg>
  );
}
