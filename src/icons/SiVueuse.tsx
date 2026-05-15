import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiVueuseHex = "41B883";
export const SiVueuseTitle = "VueUse";
export const SiVueuseSlug = "vueuse";

export function SiVueuse({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiVueuseHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiVueuseTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M.876.001v12.873C.876 19.018 5.856 24 12 24s11.124-4.982 11.124-11.126V0h-9.218v12.874c0 2.543-3.812 2.543-3.812 0V0Zm4.609 1.001h3.608v11.872C9.089 14.555 10.354 15.79 12 15.79s2.911-1.236 2.907-2.916V1.002h3.608v11.872a6.515 6.515 0 0 1-13.03 0z" />
    </Svg>
  );
}
