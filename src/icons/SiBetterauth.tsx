import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiBetterauthHex = "FFFFFF";
export const SiBetterauthTitle = "Better Auth";
export const SiBetterauthSlug = "betterauth";

export function SiBetterauth({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiBetterauthHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiBetterauthTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 3.39v17.22h5.783V15.06h6.434V8.939H5.783V3.39ZM12.217 8.94h5.638v6.122h-5.638v5.548H24V3.391H12.217Z" />
    </Svg>
  );
}
