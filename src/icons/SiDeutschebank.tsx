import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiDeutschebankHex = "0018A8";
export const SiDeutschebankTitle = "Deutsche Bank";
export const SiDeutschebankSlug = "deutschebank";

export function SiDeutschebank({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiDeutschebankHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiDeutschebankTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M3.375 3.375v17.25h17.25V3.375H3.375zM0 0h24v24H0V0zm5.25 18.225 9.15-12.45h4.35L9.6 18.225H5.25z" />
    </Svg>
  );
}
