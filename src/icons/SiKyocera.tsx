import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiKyoceraHex = "DF0522";
export const SiKyoceraTitle = "Kyocera";
export const SiKyoceraSlug = "kyocera";

export function SiKyocera({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiKyoceraHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiKyoceraTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M9.677 4.645L2.323 12V4.645h7.354zm-7.354 14.71h7.355L2.323 12v7.355zm7.354 0L17.032 12 9.677 4.645v14.71zM21.677 0h-7.355L9.677 4.645h7.355V12l4.645-4.645V0zm-12 19.355L14.323 24h7.355v-7.355L17.032 12v7.355H9.677z" />
    </Svg>
  );
}
