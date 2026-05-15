import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiCobaltHex = "FFFFFF";
export const SiCobaltTitle = "cobalt";
export const SiCobaltSlug = "cobalt";

export function SiCobalt({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiCobaltHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiCobaltTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 4.363v2.778l9.475 5.152L0 16.859v2.778l12.857-6.418V11.49zm11.143 0v2.778l9.474 5.152-9.474 4.566v2.778L24 13.219V11.49z" />
    </Svg>
  );
}
