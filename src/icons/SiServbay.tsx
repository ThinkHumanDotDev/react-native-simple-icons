import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiServbayHex = "00103C";
export const SiServbayTitle = "ServBay";
export const SiServbaySlug = "servbay";

export function SiServbay({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiServbayHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiServbayTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M14.201.028a.505.505 0 0 1 .643.313c.04.11.043.23.006.341l-2.258 6.356a.512.512 0 0 1-.319.302L1 11.168l2.665-7.33a.513.513 0 0 1 .319-.302L14.2.028h.001ZM1 11.757l2.776 4.05a.55.55 0 0 0 .622.227l5.12-1.892a.483.483 0 0 0 .29-.653l-.03-.063L7.412 9.62 1 11.756Zm8.799 12.215a.505.505 0 0 1-.643-.312.517.517 0 0 1-.006-.342l2.235-6.365a.513.513 0 0 1 .319-.3L23 12.832l-2.665 7.33a.51.51 0 0 1-.318.3l-10.218 3.51v-.001ZM20.437 8.079a.55.55 0 0 0-.622-.226l-5.12 1.893a.483.483 0 0 0-.29.65l.03.064 2.336 3.85 6.215-2.12-2.55-4.11h.001Z" />
    </Svg>
  );
}
