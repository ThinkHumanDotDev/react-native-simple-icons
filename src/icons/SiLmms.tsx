import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiLmmsHex = "10B146";
export const SiLmmsTitle = "LMMS";
export const SiLmmsSlug = "lmms";

export function SiLmms({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiLmmsHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiLmmsTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M1.714 0A1.71 1.71 0 000 1.714v20.572C0 23.236.765 24 1.714 24h20.572A1.71 1.71 0 0024 22.286V1.714A1.71 1.71 0 0022.286 0zM12 3l9 5.143v10.286l-3 1.714-3-1.714V15l3-1.714V9.857L12 6.43 6 9.857v3.429L9 15v3.429l-3 1.714-3-1.714V8.143Z" />
    </Svg>
  );
}
