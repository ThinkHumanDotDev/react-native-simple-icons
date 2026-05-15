import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiNebulaHex = "2CADFE";
export const SiNebulaTitle = "Nebula";
export const SiNebulaSlug = "nebula";

export function SiNebula({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiNebulaHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiNebulaTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M7.417 9.307 0 14.693h9.167L12 23.413l2.833-8.72H24s-3.915-2.84-7.417-5.386l2.834-8.72L12 5.976C8.499 3.438 4.583.588 4.583.588z" />
    </Svg>
  );
}
