import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiLensHex = "3D90CE";
export const SiLensTitle = "Lens";
export const SiLensSlug = "lens";

export function SiLens({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiLensHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiLensTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M9.255 3.5H3.5v4.255l3.75 4.715ZM3.5 8.955v7.125h5.665ZM19.545 3.5H10.02L8.87 8.635Zm-.9 17H20.5v-8.4l-4.32-2.105Zm-5.79-12.95 7.645 3.72v-7.4ZM3.5 16.825V20.5h6.88l2.875-3.675zm7.83 3.675h6.545l-1.51-6.435zM0 0h24v24H0Z" />
    </Svg>
  );
}
