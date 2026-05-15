import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiPagekitHex = "212121";
export const SiPagekitTitle = "Pagekit";
export const SiPagekitSlug = "pagekit";

export function SiPagekit({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiPagekitHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiPagekitTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M2.401 0v24h9.6v-3.527H5.929V3.526h12.146v13.421h-6.073v3.525H21.6V0H2.401z" />
    </Svg>
  );
}
