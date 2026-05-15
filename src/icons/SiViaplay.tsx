import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiViaplayHex = "FE365F";
export const SiViaplayTitle = "Viaplay";
export const SiViaplaySlug = "viaplay";

export function SiViaplay({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiViaplayHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiViaplayTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M1.2766 6.6383C.4742 8.2432 0 10.0669 0 12s.4742 3.7568 1.2766 5.3617L12 12ZM12 0C9.0456 0 6.3465 1.0578 4.231 2.845l12.5471 6.7477v4.8146L4.231 21.155C6.31 22.9422 9.0456 24 12 24c6.6383 0 12-5.3617 12-12S18.6383 0 12 0Z" />
    </Svg>
  );
}
