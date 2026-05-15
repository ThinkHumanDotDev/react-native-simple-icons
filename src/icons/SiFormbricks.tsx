import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiFormbricksHex = "00C4B8";
export const SiFormbricksTitle = "Formbricks";
export const SiFormbricksSlug = "formbricks";

export function SiFormbricks({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiFormbricksHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiFormbricksTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M8.658 0a5.714 5.714 0 0 0-5.715 5.714v1.532h14.49a3.623 3.623 0 0 0 0-7.246ZM2.943 8.377v7.246h14.49a3.623 3.623 0 0 0 0-7.246zm0 8.377v3.623a3.623 3.623 0 0 0 7.246 0v-3.623z" />
    </Svg>
  );
}
