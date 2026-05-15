import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiTamiyaHex = "000000";
export const SiTamiyaTitle = "Tamiya";
export const SiTamiyaSlug = "tamiya";

export function SiTamiya({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiTamiyaHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiTamiyaTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 6.408v4.27h4.496l1.36-4.27Zm5.856 0 1.398 4.27h4.496v-4.27Zm5.894 4.27-3.627 2.644 1.398 4.27h2.23Zm-2.23 6.914-3.664-2.645-3.627 2.645Zm-7.291 0 1.398-4.27L0 10.678v6.914zM12.25 6.408v4.27h4.496l1.36-4.27zm5.856 0 1.398 4.27H24v-4.27ZM24 10.678l-3.627 2.644 1.398 4.27H24Zm-2.23 6.914-3.664-2.645-3.627 2.645zm-7.29 0 1.397-4.27-3.627-2.644v6.914z" />
    </Svg>
  );
}
