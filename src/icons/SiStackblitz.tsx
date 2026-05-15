import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiStackblitzHex = "1269D3";
export const SiStackblitzTitle = "StackBlitz";
export const SiStackblitzSlug = "stackblitz";

export function SiStackblitz({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiStackblitzHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiStackblitzTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M10.797 14.182H3.635L16.728 0l-3.525 9.818h7.162L7.272 24l3.524-9.818Z" />
    </Svg>
  );
}
