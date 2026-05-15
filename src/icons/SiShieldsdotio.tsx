import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiShieldsdotioHex = "000000";
export const SiShieldsdotioTitle = "Shields.io";
export const SiShieldsdotioSlug = "shieldsdotio";

export function SiShieldsdotio({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiShieldsdotioHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiShieldsdotioTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M19 0a5 5 0 0 1 5 5v14a5 5 0 0 1-5 5H5l-.257-.007A5 5 0 0 1 0 19V5a5 5 0 0 1 5-5zm-7 21h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-7z" />
    </Svg>
  );
}
