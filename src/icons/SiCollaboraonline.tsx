import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiCollaboraonlineHex = "5C2983";
export const SiCollaboraonlineTitle = "Collabora Online";
export const SiCollaboraonlineSlug = "collaboraonline";

export function SiCollaboraonline({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiCollaboraonlineHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiCollaboraonlineTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M8.852 0 3.55 5.303 10.247 12 3.55 18.698 8.852 24l12-12zM3.147 5.706v12.588L9.442 12z" />
    </Svg>
  );
}
