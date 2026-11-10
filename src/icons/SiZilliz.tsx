import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiZillizHex = "2858FF";
export const SiZillizTitle = "Zilliz";
export const SiZillizSlug = "zilliz";

export function SiZilliz({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiZillizHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiZillizTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M11.25 16.317V24h1.5v-9.2l3.989 6.908a11 11 0 0 0 1.298-.752l-4.366-7.562 4.808 1.75a7 7 0 0 0 .51-1.41l-2.701-.984H24v-1.5h-9.201l6.909-3.989a11 11 0 0 0-.752-1.298l-7.517 4.34 1.735-4.767a7 7 0 0 0-1.408-.518L12.75 7.81V0h-1.5v9.2L7.261 2.293a11 11 0 0 0-1.298.752l4.348 7.53-4.78-1.739a7 7 0 0 0-.515 1.409L7.78 11.25H0v1.5h9.2l-6.908 3.989a11 11 0 0 0 .752 1.298l7.576-4.374-1.755 4.82a7 7 0 0 0 1.411.51z" />
    </Svg>
  );
}
