import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiPomeriumHex = "6F43E7";
export const SiPomeriumTitle = "Pomerium";
export const SiPomeriumSlug = "pomerium";

export function SiPomerium({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiPomeriumHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiPomeriumTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 6.768v2.338l.038-.005A2.832 2.832 0 0 1 3.2 11.913v7.998h2.318v-9.023A2.687 2.687 0 0 1 7.95 8.213c1.288-.123 2.345.873 2.345 2.167v9.53h2.317v-9.265c0-1.685 1.271-3.1 2.948-3.281 1.565-.169 2.922 1.085 2.922 2.66v9.886H20.8v-9.875A3.635 3.635 0 0 1 24 6.422V4.089z" />
    </Svg>
  );
}
