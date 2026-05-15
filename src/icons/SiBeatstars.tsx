import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiBeatstarsHex = "EB0000";
export const SiBeatstarsTitle = "BeatStars";
export const SiBeatstarsSlug = "beatstars";

export function SiBeatstars({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiBeatstarsHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiBeatstarsTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m17.217 11.996-3.308 1.079v3.478l-2.052-2.818-3.309 1.079 2.043-2.818-2.043-2.819 3.31 1.08 2.05-2.819v3.487zm0 0v7.277H6.854V4.584h10.363v7.412l4.585-1.49v-7.67L19.135 0H2.198v24h16.92l2.684-2.685v-7.83z" />
    </Svg>
  );
}
