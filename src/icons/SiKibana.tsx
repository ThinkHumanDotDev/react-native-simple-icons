import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiKibanaHex = "005571";
export const SiKibanaTitle = "Kibana";
export const SiKibanaSlug = "kibana";

export function SiKibana({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiKibanaHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiKibanaTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M2.625 0v21.591L21.375 0zm10.864 12.47L3.477 24h17.522a18.755 18.755 0 0 0-7.51-11.53z" />
    </Svg>
  );
}
