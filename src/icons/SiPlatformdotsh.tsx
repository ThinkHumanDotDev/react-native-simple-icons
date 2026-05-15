import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiPlatformdotshHex = "1A182A";
export const SiPlatformdotshTitle = "Platform.sh";
export const SiPlatformdotshSlug = "platformdotsh";

export function SiPlatformdotsh({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiPlatformdotshHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiPlatformdotshTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M24 0H0v9.541h24V0zM24 20.755H0V24h24v-3.245zM0 12.618h24v4.892H0v-4.892z" />
    </Svg>
  );
}
