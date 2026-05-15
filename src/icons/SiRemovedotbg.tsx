import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiRemovedotbgHex = "54616C";
export const SiRemovedotbgTitle = "remove.bg";
export const SiRemovedotbgSlug = "removedotbg";

export function SiRemovedotbg({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiRemovedotbgHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiRemovedotbgTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m23.729 13.55-1.903-.995-9.134 4.776a1.497 1.497 0 0 1-1.383.002l-9.137-4.778-1.903.995a.5.5 0 0 0 0 .888l11.499 6.011a.495.495 0 0 0 .462 0l11.499-6.011a.5.5 0 0 0 0-.888zM.269 10.447l11.499 6.013a.495.495 0 0 0 .462 0l11.499-6.013a.5.5 0 0 0 0-.887l-11.5-6.012a.505.505 0 0 0-.462 0L.268 9.559a.5.5 0 0 0 .001.887z" />
    </Svg>
  );
}
