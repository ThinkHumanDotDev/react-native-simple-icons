import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiThurgauerkantonalbankHex = "006D41";
export const SiThurgauerkantonalbankTitle = "Thurgauer Kantonalbank";
export const SiThurgauerkantonalbankSlug = "thurgauerkantonalbank";

export function SiThurgauerkantonalbank({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiThurgauerkantonalbankHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiThurgauerkantonalbankTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M21.872 2.262H10.775l-6.14 9.743 6.14 9.771h11.097l-6.135-9.77 6.135-9.744zM0 .297v23.406h24V.297H0zm23.057 22.486L.943 22.778V1.228h22.109l.005 21.555z" />
    </Svg>
  );
}
