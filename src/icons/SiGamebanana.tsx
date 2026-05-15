import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiGamebananaHex = "FCEF40";
export const SiGamebananaTitle = "GameBanana";
export const SiGamebananaSlug = "gamebanana";

export function SiGamebanana({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiGamebananaHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiGamebananaTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M14.249 0v3h1.5V1.5h1.505V3h-1.505V7.5h1.5V4.5h3.002v-1.5h-1.505V0Zm6.002 4.498v1.5h1.5V4.501Zm1.5 1.5v10.503h1.5V5.998Zm0 10.503h-1.5V19.5h1.5zm-1.5 2.998h-1.505v1.5h1.5zm-1.5 1.5h-3.002v1.5h3.001zm-3.002 1.5H6.75V24h9zm-8.999 0V21h-3v1.5zm-3-1.5v-1.497H2.248v1.5zm-1.501-1.497v-2.997H9.75v-1.5H.748v4.497zm7.502-4.497h2.997v-1.5H9.751Zm2.997-1.5h1.5v-1.501h-1.5zm1.5-1.501h1.501V7.506h-1.5z" />
    </Svg>
  );
}
