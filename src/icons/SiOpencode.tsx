import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiOpencodeHex = "000000";
export const SiOpencodeTitle = "OpenCode";
export const SiOpencodeSlug = "opencode";

export function SiOpencode({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiOpencodeHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiOpencodeTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M22 24H2V0h20zM17 4.8H7v14.4h10z" />
    </Svg>
  );
}
