import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiZendHex = "0679EA";
export const SiZendTitle = "Zend";
export const SiZendSlug = "zend";

export function SiZend({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiZendHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiZendTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M24 .467L9.01 20.217H20.54A3.46 3.46 0 0024 16.757V.468zM3.459 3.783C1.585 3.783 0 5.153 0 7.1v16.433l15.063-19.75H3.459Z" />
    </Svg>
  );
}
