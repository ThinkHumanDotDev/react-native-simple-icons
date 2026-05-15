import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiRiseupHex = "FF0000";
export const SiRiseupTitle = "Riseup";
export const SiRiseupSlug = "riseup";

export function SiRiseup({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiRiseupHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiRiseupTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M10.5 24l-1.485-9.007-8.961-1.738L8.16 9.06 7.045 0l6.495 6.414 8.271-3.861-4.093 8.16 6.228 6.673-9.024-1.372z" />
    </Svg>
  );
}
