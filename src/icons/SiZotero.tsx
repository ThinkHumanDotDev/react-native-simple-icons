import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiZoteroHex = "CC2936";
export const SiZoteroTitle = "Zotero";
export const SiZoteroSlug = "zotero";

export function SiZotero({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiZoteroHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiZoteroTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M21.231 2.462 7.18 20.923h14.564V24H2.256v-2.462L16.308 3.076H2.975V0h18.256v2.462z" />
    </Svg>
  );
}
