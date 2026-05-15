import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiLinksysHex = "000000";
export const SiLinksysTitle = "Linksys";
export const SiLinksysSlug = "linksys";

export function SiLinksys({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiLinksysHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiLinksysTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M19.871 0c-1.7024 0-3.082 1.38-3.082 3.082 0 1.7025 1.38 3.08 3.082 3.082 1.7026 0 3.082-1.3795 3.082-3.082 0-1.7024-1.3795-3.082-3.082-3.082ZM1.047.488V24h21.3105v-3.469H5.166V.488Zm7.156 0v17.156h14.154v-3.4707h-10.039V.488Z" />
    </Svg>
  );
}
