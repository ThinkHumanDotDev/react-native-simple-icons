import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiFonomaHex = "02B78F";
export const SiFonomaTitle = "Fonoma";
export const SiFonomaSlug = "fonoma";

export function SiFonoma({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiFonomaHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiFonomaTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M19.706 21.919a4.295 4.295 0 0 0 4.293-4.296 4.295 4.295 0 1 0-4.293 4.296zM4.296 10.672a4.295 4.295 0 0 0 4.293-4.295 4.295 4.295 0 1 0-4.294 4.295zm10.412 0h4.975a4.277 4.277 0 0 0 4.293-4.295 4.277 4.277 0 0 0-4.293-4.296h-4.975a4.277 4.277 0 0 0-4.294 4.296 4.277 4.277 0 0 0 4.294 4.295zM4.295 21.92h4.976a4.277 4.277 0 0 0 4.293-4.296 4.277 4.277 0 0 0-4.293-4.295H4.295a4.277 4.277 0 0 0-4.293 4.295c.068 2.318 1.976 4.296 4.293 4.296z" />
    </Svg>
  );
}
