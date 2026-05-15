import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiClickhouseHex = "FFCC01";
export const SiClickhouseTitle = "ClickHouse";
export const SiClickhouseSlug = "clickhouse";

export function SiClickhouse({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiClickhouseHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiClickhouseTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M21.333 10H24v4h-2.667ZM16 1.335h2.667v21.33H16Zm-5.333 0h2.666v21.33h-2.666ZM0 22.665V1.335h2.667v21.33zm5.333-21.33H8v21.33H5.333Z" />
    </Svg>
  );
}
