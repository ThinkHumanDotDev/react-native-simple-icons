import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiHashicorpHex = "000000";
export const SiHashicorpTitle = "HashiCorp";
export const SiHashicorpSlug = "hashicorp";

export function SiHashicorp({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiHashicorpHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiHashicorpTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M10.114 4.094 4.215 7.5v13.09L.666 18.542V5.45L10.114 0v4.094zm3.772 13.37 3.549-2.049V2.05L13.885 0v10.426h-3.77v-3.89L6.562 8.585v13.357l3.551 2.054V13.599h3.772v3.865zM19.783 3.41V16.5l-5.897 3.405V24l9.448-5.45V5.458l-3.551-2.05z" />
    </Svg>
  );
}
