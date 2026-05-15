import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiFlipboardHex = "E12828";
export const SiFlipboardTitle = "Flipboard";
export const SiFlipboardSlug = "flipboard";

export function SiFlipboard({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiFlipboardHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiFlipboardTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 0v24h24V0H0zm19.2 9.6h-4.8v4.8H9.6v4.8H4.8V4.8h14.4v4.8z" />
    </Svg>
  );
}
