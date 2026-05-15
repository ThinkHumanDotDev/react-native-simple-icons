import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiMainwpHex = "7FB100";
export const SiMainwpTitle = "MainWP";
export const SiMainwpSlug = "mainwp";

export function SiMainwp({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiMainwpHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiMainwpTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0m0 2.4004c1.3251 0 2.4004 1.0752 2.4004 2.4004a2.397 2.397 0 0 1-.7031 1.6953 2.4 2.4 0 0 1-.5957.4355L16.08 19.1992 12 21.6016l-4.08-2.4024 2.9784-12.2676a2.4 2.4 0 0 1-.5937-.4355 2.397 2.397 0 0 1-.7031-1.6953c0-1.3252 1.0732-2.4004 2.3984-2.4004" />
    </Svg>
  );
}
