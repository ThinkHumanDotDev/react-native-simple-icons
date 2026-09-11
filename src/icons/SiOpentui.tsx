import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiOpentuiHex = "000000";
export const SiOpentuiTitle = "OpenTUI";
export const SiOpentuiSlug = "opentui";

export function SiOpentui({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiOpentuiHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiOpentuiTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 1.2v21.6h24V1.2Zm4.8 6h3.6v9.6H4.8Z" />
    </Svg>
  );
}
