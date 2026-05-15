import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiEmbarkHex = "000000";
export const SiEmbarkTitle = "Embark";
export const SiEmbarkSlug = "embark";

export function SiEmbark({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiEmbarkHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiEmbarkTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M3.658 16.662v-6.644C9.197 10.017 13.687 5.533 13.69 0h6.653c-.003 9.202-7.472 16.662-16.685 16.662ZM3.656 24v-6.672h16.689V24H3.657" />
    </Svg>
  );
}
