import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiBandcampHex = "408294";
export const SiBandcampTitle = "Bandcamp";
export const SiBandcampSlug = "bandcamp";

export function SiBandcamp({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiBandcampHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiBandcampTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 18.75l7.437-13.5H24l-7.438 13.5H0z" />
    </Svg>
  );
}
