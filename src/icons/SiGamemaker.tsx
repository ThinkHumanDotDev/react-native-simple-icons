import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiGamemakerHex = "000000";
export const SiGamemakerTitle = "Gamemaker";
export const SiGamemakerSlug = "gamemaker";

export function SiGamemaker({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiGamemakerHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiGamemakerTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M.012 11.994 12.006 0l11.982 12.006h-6.831l-5.163-5.151-5.151 5.151 5.163 5.151v-5.151h5.151v6.903L12.006 24z" />
    </Svg>
  );
}
