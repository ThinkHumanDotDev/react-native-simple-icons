import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiSnowpackHex = "2E5E82";
export const SiSnowpackTitle = "Snowpack";
export const SiSnowpackSlug = "snowpack";

export function SiSnowpack({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiSnowpackHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiSnowpackTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M23.8094 19.7512l-10.8-16.7999a1.2002 1.2002 0 00-2.0189 0L.1906 19.7512a1.2 1.2 0 00-.0439 1.224 1.2002 1.2002 0 001.0534.6247H22.8c.4391 0 .843-.2396 1.0534-.6251a1.1994 1.1994 0 00-.044-1.2236zM12 5.8193L15.202 10.8H12l-2.4 2.4-1.4272-1.4272z" />
    </Svg>
  );
}
