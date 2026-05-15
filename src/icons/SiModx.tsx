import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiModxHex = "102C53";
export const SiModxTitle = "MODX";
export const SiModxSlug = "modx";

export function SiModx({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiModxHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiModxTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M19.145 9.49l4.47-7.19H12.118l-1.24 2.023zM2.92 0v11.497l2.48 1.55 13.435-3.1zm18.16 24V12.503l-1.984-1.263-5.168 8.267zM5.165 14.053l-4.78 7.648h11.497L18.6 10.953Z" />
    </Svg>
  );
}
