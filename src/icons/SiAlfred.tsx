import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiAlfredHex = "5C1F87";
export const SiAlfredTitle = "Alfred";
export const SiAlfredSlug = "alfred";

export function SiAlfred({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiAlfredHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiAlfredTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m0 15.902c0-1.142 1.133-2.184 3-2.977v-1.827c0-4.142 4.029-7.5 9-7.5s9 3.358 9 7.5v1.827c1.867.793 3 1.835 3 2.977 0 2.485-5.373 4.5-12 4.5s-12-2.015-12-4.5z" />
    </Svg>
  );
}
