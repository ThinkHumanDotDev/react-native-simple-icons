import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiNexonHex = "000000";
export const SiNexonTitle = "NEXON";
export const SiNexonSlug = "nexon";

export function SiNexon({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiNexonHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiNexonTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M10.714 15.358V0L0 5.697v15.358L13.29 24 24 18.303zm-9.495-1.219 7.291 1.568-7.291 3.832zm11.895 8.578L2.35 20.327l7.454-3.926 10.846 2.406z" />
    </Svg>
  );
}
