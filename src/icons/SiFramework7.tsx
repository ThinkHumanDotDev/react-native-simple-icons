import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiFramework7Hex = "EE350F";
export const SiFramework7Title = "Framework7";
export const SiFramework7Slug = "framework7";

export function SiFramework7({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiFramework7Hex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiFramework7Title}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 12a11.95 11.95 0 012.713-7.6h18.574L8.037 23.33C3.358 21.694 0 17.24 0 12zm22.271-6.208A11.944 11.944 0 0124 12c0 6.627-5.373 12-12 12-.794 0-1.57-.077-2.32-.224zM4.295 2.8A11.952 11.952 0 0112 0c2.933 0 5.62 1.052 7.705 2.8z" />
    </Svg>
  );
}
