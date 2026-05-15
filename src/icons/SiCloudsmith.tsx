import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiCloudsmithHex = "2A6FE1";
export const SiCloudsmithTitle = "Cloudsmith";
export const SiCloudsmithSlug = "cloudsmith";

export function SiCloudsmith({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiCloudsmithHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiCloudsmithTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M24 10.667v2.667L13.333 24h-2.666L0 13.334v-2.667L10.667 0h2.666L24 10.667Zm-12 6.869a5.535 5.535 0 1 0 0-11.07 5.535 5.535 0 0 0 0 11.07Z" />
    </Svg>
  );
}
