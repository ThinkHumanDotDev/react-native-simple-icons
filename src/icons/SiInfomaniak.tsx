import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiInfomaniakHex = "0098FF";
export const SiInfomaniakTitle = "Infomaniak";
export const SiInfomaniakSlug = "infomaniak";

export function SiInfomaniak({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiInfomaniakHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiInfomaniakTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M2.4 0A2.395 2.395 0 0 0 0 2.4v19.2C0 22.9296 1.0704 24 2.4 24h19.2c1.3296 0 2.4-1.0704 2.4-2.4V2.4C24 1.0704 22.9296 0 21.6 0H10.112v11.7119l3.648-4.128h6l-4.58 4.3506 4.868 8.1296h-5.52l-2.5938-5.0211L10.112 16.8v3.264H5.12V0Z" />
    </Svg>
  );
}
