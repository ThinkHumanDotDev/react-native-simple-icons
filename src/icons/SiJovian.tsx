import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiJovianHex = "0D61FF";
export const SiJovianTitle = "Jovian";
export const SiJovianSlug = "jovian";

export function SiJovian({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiJovianHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiJovianTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M20.25 1.65C20.25.74 19.51 0 18.6 0H5.4c-.91 0-1.65.74-1.65 1.65v20.7c0 .91.74 1.65 1.65 1.65h13.2c.91 0 1.65-.74 1.65-1.65V1.65zm-5.275 4.341a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm.04 9.018a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-6.015 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
    </Svg>
  );
}
