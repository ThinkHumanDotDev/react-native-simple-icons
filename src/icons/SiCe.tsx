import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiCeHex = "000000";
export const SiCeTitle = "CE";
export const SiCeSlug = "ce";

export function SiCe({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiCeHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiCeTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M24 20.53v-2.59a6 6 0 0 1-.857.06 6 6 0 0 1-5.862-4.714h5.005v-2.571H17.28A6 6 0 0 1 24 6.06V3.47a9 9 0 0 0-.857-.042 8.571 8.571 0 1 0 .857 17.1M0 12a8.57 8.57 0 0 0 9.486 8.524V17.93q-.448.07-.915.07a6 6 0 1 1 .915-11.93V3.477a9 9 0 0 0-.915-.048A8.57 8.57 0 0 0 0 12" />
    </Svg>
  );
}
