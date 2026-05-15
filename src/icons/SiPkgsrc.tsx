import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiPkgsrcHex = "FF6600";
export const SiPkgsrcTitle = "pkgsrc";
export const SiPkgsrcSlug = "pkgsrc";

export function SiPkgsrc({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiPkgsrcHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiPkgsrcTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m12.908 8.763 9.157-5.132L11.25 0 1.62 4.42Zm1.5 2.29 9-5.368-.948 11.84-8.191 6.382zM.593 6.712 1.619 18.79 11.922 24l-.12-12.788Z" />
    </Svg>
  );
}
