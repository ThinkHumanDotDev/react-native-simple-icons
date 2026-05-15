import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiThefinalsHex = "D31F3C";
export const SiThefinalsTitle = "THE FINALS";
export const SiThefinalsSlug = "thefinals";

export function SiThefinals({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiThefinalsHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiThefinalsTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M18.523 19.319H24L14.965 6.295c-.626-.904-1.51-1.614-2.847-1.614-1.38 0-2.264.775-2.889 1.614L0 19.319h5.261l3.372-4.759 3.256 4.759h5.478l-5.934-8.712.599-.846 6.491 9.558Zm0 0" />
    </Svg>
  );
}
