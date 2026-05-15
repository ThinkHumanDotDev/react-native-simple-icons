import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiPrintablesHex = "FA6831";
export const SiPrintablesTitle = "Printables";
export const SiPrintablesSlug = "printables";

export function SiPrintables({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiPrintablesHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiPrintablesTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M3.678 4.8 12 9.6v9.6l8.322-4.8V4.8L12 0ZM12 19.2l-8.322-4.8V24Z" />
    </Svg>
  );
}
