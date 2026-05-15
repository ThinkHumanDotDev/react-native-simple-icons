import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiChartmogulHex = "13324B";
export const SiChartmogulTitle = "ChartMogul";
export const SiChartmogulSlug = "chartmogul";

export function SiChartmogul({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiChartmogulHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiChartmogulTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M10.621 19.89V8.75L2.867 19.89H0V4.11h2.758v11.112l7.754-11.113h2.867v11.14L21.16 4.11H24v15.782h-2.73V8.75l-7.755 11.14Z" />
    </Svg>
  );
}
