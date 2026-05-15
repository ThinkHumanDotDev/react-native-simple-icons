import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiVagrantHex = "1868F2";
export const SiVagrantTitle = "Vagrant";
export const SiVagrantSlug = "vagrant";

export function SiVagrant({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiVagrantHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiVagrantTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M3.556 0L.392 1.846V4.11l7.124 17.3L11.998 24l4.523-2.611 7.083-17.345V1.848l.004-.002L20.44 0l-5.274 3.087v2.111l-3.168 7.384-3.164-7.384V3.109l-.017-.008.017-.01z" />
    </Svg>
  );
}
