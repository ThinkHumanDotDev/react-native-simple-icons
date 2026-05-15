import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiVectorlogozoneHex = "184D66";
export const SiVectorlogozoneTitle = "Vector Logo Zone";
export const SiVectorlogozoneSlug = "vectorlogozone";

export function SiVectorlogozone({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiVectorlogozoneHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiVectorlogozoneTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M19.458 0l-5.311 2.024 1.989.534-4.847 16.085-4.867-16.25H1.48L8.974 24h4.645l7.043-20.226 1.858.499Z" />
    </Svg>
  );
}
