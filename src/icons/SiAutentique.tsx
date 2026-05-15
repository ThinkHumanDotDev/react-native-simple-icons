import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiAutentiqueHex = "3379F2";
export const SiAutentiqueTitle = "Autentique";
export const SiAutentiqueSlug = "autentique";

export function SiAutentique({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiAutentiqueHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiAutentiqueTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m18.54 1.225-.27 1.66a10.57 10.57 0 0 0-6.114-2.32L0 11.99h12.156V6.062c3.199 0 5.74 2.434 5.74 5.917 0 3.687-2.614 5.98-5.73 5.98-2.594 0-4.648-1.557-5.429-3.898L0 11.984c0 6.43 4.591 11.45 11.543 11.45 1.666 0 4.259-.383 6.706-2.325l.29 1.64H24V1.225Z" />
    </Svg>
  );
}
