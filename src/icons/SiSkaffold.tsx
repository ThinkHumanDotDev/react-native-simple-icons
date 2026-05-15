import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiSkaffoldHex = "2AA2D6";
export const SiSkaffoldTitle = "Skaffold";
export const SiSkaffoldSlug = "skaffold";

export function SiSkaffold({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiSkaffoldHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiSkaffoldTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M6.602 20.097H24v3.836H6.602v-3.836zm-2.766-6.692h13.562v3.837H0V6.714h3.836v6.691zm13.562-9.502H0V.067h17.398v3.836zm2.766 6.692H6.602V6.758H24v10.528h-3.836v-6.691z" />
    </Svg>
  );
}
