import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiMonogameHex = "E73C00";
export const SiMonogameTitle = "MonoGame";
export const SiMonogameSlug = "monogame";

export function SiMonogame({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiMonogameHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiMonogameTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M24 10.356V7.083a7.083 7.083 0 0 0-12-5.098A7.083 7.083 0 0 0 0 7.083v9.834A7.083 7.083 0 0 0 7.083 24h9.834a7.083 7.083 0 0 0 7.07-7.51H24v-4.332H9.834v4.332h9.834v.427a2.751 2.751 0 0 1-2.751 2.751H7.083a2.751 2.751 0 0 1-2.751-2.751V7.083a2.751 2.751 0 1 1 5.502 0v3.273h4.332V7.083a2.751 2.751 0 1 1 5.502 0v3.273z" />
    </Svg>
  );
}
