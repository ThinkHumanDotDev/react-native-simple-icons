import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiVitessHex = "F16728";
export const SiVitessTitle = "Vitess";
export const SiVitessSlug = "vitess";

export function SiVitess({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiVitessHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiVitessTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m19.206 1.045-7.217 13.186L4.817 1.045H0l11.904 21.91L24 1.045h-4.794Z" />
    </Svg>
  );
}
