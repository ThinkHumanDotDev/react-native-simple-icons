import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiSimpleanalyticsHex = "FF4F64";
export const SiSimpleanalyticsTitle = "Simple Analytics";
export const SiSimpleanalyticsSlug = "simpleanalytics";

export function SiSimpleanalytics({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiSimpleanalyticsHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiSimpleanalyticsTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M1.019 13.019h3.849V24h-3.85zm8.943-6.68h3.85V24h-3.85zM19.132 0h3.85v24h-3.85z" />
    </Svg>
  );
}
