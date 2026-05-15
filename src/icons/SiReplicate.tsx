import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiReplicateHex = "000000";
export const SiReplicateTitle = "Replicate";
export const SiReplicateSlug = "replicate";

export function SiReplicate({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiReplicateHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiReplicateTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M24 10.262v2.712h-9.518V24h-3.034V10.262zm0-5.131v2.717H8.755V24H5.722V5.131zM24 0v2.717H3.034V24H0V0z" />
    </Svg>
  );
}
