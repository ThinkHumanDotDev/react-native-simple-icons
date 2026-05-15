import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiActigraphHex = "3A4259";
export const SiActigraphTitle = "ActiGraph";
export const SiActigraphSlug = "actigraph";

export function SiActigraph({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiActigraphHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiActigraphTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M10.18899 0 .8597 24h4.15078L12 4.97502h.0304L18.9587 24h4.1816L14.18736.91564C13.97372.36626 13.44452 0 12.85444 0ZM12 13.71434a2.47223 2.47223 0 0 0-2.4723 2.47211A2.47223 2.47223 0 0 0 12 18.65876a2.47223 2.47223 0 0 0 2.47211-2.4723 2.47223 2.47223 0 0 0-2.4721-2.47212z" />
    </Svg>
  );
}
