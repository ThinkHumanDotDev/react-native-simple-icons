import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiNetdataHex = "00AB44";
export const SiNetdataTitle = "Netdata";
export const SiNetdataSlug = "netdata";

export function SiNetdata({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiNetdataHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiNetdataTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M14.764 21.827H9.922L0 2.173h14.084c5.476.01 9.913 4.565 9.916 10.183-.009 5.235-4.14 9.47-9.238 9.47z" />
    </Svg>
  );
}
