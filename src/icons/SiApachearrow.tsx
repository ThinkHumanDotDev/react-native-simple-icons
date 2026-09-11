import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiApachearrowHex = "000000";
export const SiApachearrowTitle = "Apache Arrow";
export const SiApachearrowSlug = "apachearrow";

export function SiApachearrow({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiApachearrowHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiApachearrowTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m0 2 10 10L0 22v-4l6-6-6-6zm7 0 10 10L7 22v-4l6-6-6-6zm7 0 10 10-10 10v-4l6-6-6-6z" />
    </Svg>
  );
}
