import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiPaysafeHex = "5A28FF";
export const SiPaysafeTitle = "Paysafe";
export const SiPaysafeSlug = "paysafe";

export function SiPaysafe({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiPaysafeHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiPaysafeTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m23.905 12.233-7.672 7.673a.16.16 0 0 1-.115.047h-.048a.162.162 0 0 1-.162-.161v-7.787a.324.324 0 0 1-.094.228L8.188 19.86a.332.332 0 0 1-.466 0L.095 12.235a.332.332 0 0 1 0-.466L7.72 4.142a.334.334 0 0 1 .467 0l7.625 7.625c.06.06.094.143.094.23V4.208c0-.089.073-.162.162-.162h.048c.043 0 .084.018.115.048l7.672 7.672a.333.333 0 0 1 .002.467z" />
    </Svg>
  );
}
