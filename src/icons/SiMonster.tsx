import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiMonsterHex = "6D4C9F";
export const SiMonsterTitle = "Monster";
export const SiMonsterSlug = "monster";

export function SiMonster({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiMonsterHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiMonsterTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 0V24H5.42V12.39L12 18.19L18.58 12.39V24H24V0L12 11.23L0 0Z" />
    </Svg>
  );
}
