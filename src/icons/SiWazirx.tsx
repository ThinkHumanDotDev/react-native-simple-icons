import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiWazirxHex = "3067F0";
export const SiWazirxTitle = "WazirX";
export const SiWazirxSlug = "wazirx";

export function SiWazirx({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiWazirxHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiWazirxTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M.965 21.964h21.924v-2.485H.965v2.485Zm6.752-3.81h15.195L24 6.343 7.717 18.155Zm9.384-8.704L5.205 18.072H1.93l6.045-9.814 3.858-6.22 5.269 7.412Zm-11.693.223L0 6.067l.994 10.762 4.414-7.156Z" />
    </Svg>
  );
}
