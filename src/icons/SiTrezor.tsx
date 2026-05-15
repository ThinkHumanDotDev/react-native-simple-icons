import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiTrezorHex = "141609";
export const SiTrezorTitle = "Trezor";
export const SiTrezorSlug = "trezor";

export function SiTrezor({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiTrezorHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiTrezorTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M17.858 5.569c0-3.044-2.643-5.569-5.86-5.569-3.216 0-5.856 2.525-5.856 5.569v1.78H3.731V20.15L11.998 24l8.271-3.849V7.403h-2.411zm-8.73 0c0-1.434 1.264-2.584 2.87-2.584 1.61 0 2.87 1.15 2.87 2.584v1.78h-5.74Zm7.81 12.516-4.94 2.298-4.937-2.298v-7.693h9.878z" />
    </Svg>
  );
}
