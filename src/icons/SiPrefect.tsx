import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiPrefectHex = "070E10";
export const SiPrefectTitle = "Prefect";
export const SiPrefectSlug = "prefect";

export function SiPrefect({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiPrefectHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiPrefectTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12 8.003 4.288 4.002 12 0l7.713 4v8.004L12 16v8l-7.71-4v-8L12 16V8.003Z" />
    </Svg>
  );
}
