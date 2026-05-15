import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiFaunaHex = "3A1AB6";
export const SiFaunaTitle = "Fauna";
export const SiFaunaSlug = "fauna";

export function SiFauna({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiFaunaHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiFaunaTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M17.864 5.034c-1.454.496-2.155 1.385-2.632 2.77-.123.369-.43.778-.777 1.053l1.193 1.306-3.787-2.706L1.411 0s.754 5.003 1.015 6.844c.185 1.298.5 1.88 1.5 2.47l.401.22 1.724.928-1.024-.543 4.726 2.636-.031.07-5.087-2.407c.27.944.793 2.761 1.016 3.564.238.865.508 1.18 1.331 1.487l1.516.566.94-.378-1.194.81L2.28 24c3.963-3.76 7.319-5.097 9.774-6.19 3.132-1.385 5.018-2.274 6.249-5.468.877-2.242 1.562-5.113 2.432-6.222l1.855-2.423s-3.84 1.039-4.726 1.337z" />
    </Svg>
  );
}
