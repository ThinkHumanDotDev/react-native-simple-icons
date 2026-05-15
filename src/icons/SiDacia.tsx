import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiDaciaHex = "646B52";
export const SiDaciaTitle = "Dacia";
export const SiDaciaSlug = "dacia";

export function SiDacia({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiDaciaHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiDaciaTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 8.646v2.23h8.252v2.248H0v2.23h9.112a.62.62 0 00.489-.201L12 12.819l2.399 2.334a.62.62 0 00.49.201H24v-2.23h-8.252v-2.248H24v-2.23h-9.112a.62.62 0 00-.489.201L12 11.181 9.601 8.847a.62.62 0 00-.49-.201Z" />
    </Svg>
  );
}
