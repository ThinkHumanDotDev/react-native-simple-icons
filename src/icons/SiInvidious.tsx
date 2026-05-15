import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiInvidiousHex = "00B6F0";
export const SiInvidiousTitle = "Invidious";
export const SiInvidiousSlug = "invidious";

export function SiInvidious({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiInvidiousHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiInvidiousTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm0 .742A11.257 11.257 0 0 1 23.258 12 11.257 11.257 0 0 1 12 23.258 11.257 11.257 0 0 1 .742 12 11.257 11.257 0 0 1 12 .742zm-.66 4.375a.776.776 0 0 0-.777.778.776.776 0 0 0 .777.775.776.776 0 0 0 .775-.775.776.776 0 0 0-.775-.778zm.035 2.266-.523 1.853-2.75 9.291h-.713v.373h1.974v-.373h-.875l2.606-8.806 4.6 9.174h1.429L11.375 7.383z" />
    </Svg>
  );
}
