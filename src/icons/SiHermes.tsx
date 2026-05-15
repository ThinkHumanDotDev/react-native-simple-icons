import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiHermesHex = "0091CD";
export const SiHermesTitle = "Hermes";
export const SiHermesSlug = "hermes";

export function SiHermes({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiHermesHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiHermesTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m21.818 4.516-1.05 4.148h2.175L24 4.516M19.41 14.04h2.17l1.04-4.08h-2.178m-2.41 9.523h2.154l1.056-4.147h-2.16m.193-5.377H5.55v.92l3.341 3.161h9.349m2.41-9.525H0v1.116l3.206 3.032H19.6m-8.372 7.58 3.43 3.24h2.205l1.05-4.147h-6.685" />
    </Svg>
  );
}
