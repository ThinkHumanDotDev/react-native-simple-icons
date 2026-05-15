import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiSailsdotjsHex = "14ACC2";
export const SiSailsdotjsTitle = "Sails.js";
export const SiSailsdotjsSlug = "sailsdotjs";

export function SiSailsdotjs({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiSailsdotjsHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiSailsdotjsTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M2.23828 24S-6.9375 9.39844 11.9375 0v24H2.23828M14.85938 24V9.125s3.01171 4.91406 9.1328 14.875h-9.1328" />
    </Svg>
  );
}
