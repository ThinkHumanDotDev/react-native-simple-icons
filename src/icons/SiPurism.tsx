import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiPurismHex = "2D2D2D";
export const SiPurismTitle = "Purism";
export const SiPurismSlug = "purism";

export function SiPurism({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiPurismHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiPurismTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M24 19.588H0V4.412h24zM2.824 16.765h18.352v-9.53H2.824Z" />
    </Svg>
  );
}
