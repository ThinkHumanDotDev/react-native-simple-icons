import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiReverbnationHex = "E43526";
export const SiReverbnationTitle = "ReverbNation";
export const SiReverbnationSlug = "reverbnation";

export function SiReverbnation({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiReverbnationHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiReverbnationTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M24 9.324l-9.143-.03L11.971.57 9.143 9.294 0 9.324h.031l7.367 5.355-2.855 8.749h.029l7.459-5.386 7.396 5.386-2.855-8.73L24 9.315" />
    </Svg>
  );
}
