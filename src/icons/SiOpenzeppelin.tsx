import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiOpenzeppelinHex = "4E5EE4";
export const SiOpenzeppelinTitle = "OpenZeppelin";
export const SiOpenzeppelinSlug = "openzeppelin";

export function SiOpenzeppelin({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiOpenzeppelinHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiOpenzeppelinTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M22.783 24H9.317l2.196-3.69a5.23 5.23 0 0 1 4.494-2.558h6.775ZM1.217 0h21.566l-3.718 6.247H1.217ZM9.76 9.763a5.73 5.73 0 0 1 4.92-2.795h4.01L8.498 24h-7.26Z" />
    </Svg>
  );
}
