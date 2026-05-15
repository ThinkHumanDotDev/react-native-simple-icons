import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiNaverHex = "03C75A";
export const SiNaverTitle = "Naver";
export const SiNaverSlug = "naver";

export function SiNaver({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiNaverHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiNaverTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M16.273 12.845 7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845Z" />
    </Svg>
  );
}
