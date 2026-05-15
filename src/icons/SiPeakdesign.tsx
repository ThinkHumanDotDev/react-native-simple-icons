import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiPeakdesignHex = "1C1B1C";
export const SiPeakdesignTitle = "Peak Design";
export const SiPeakdesignSlug = "peakdesign";

export function SiPeakdesign({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiPeakdesignHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiPeakdesignTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m24 10.523-9.446 6.493-4.74-3.271 4.723-3.255 3.738 2.57 3.705-2.537zm-6.743 3.255-2.72-1.886-2.704 1.853 2.737 1.869zm-7.794-.284-3.738-2.57-3.706 2.554h-2.019l9.43-6.493 4.756 3.255zm-2.737-3.254 2.737 1.869 2.704-1.869-2.737-1.87z" />
    </Svg>
  );
}
