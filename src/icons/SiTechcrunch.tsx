import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiTechcrunchHex = "029F00";
export const SiTechcrunchTitle = "TechCrunch";
export const SiTechcrunchSlug = "techcrunch";

export function SiTechcrunch({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiTechcrunchHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiTechcrunchTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 6v4h4v8h4v-8h4V6Zm12 4v8h12v-4h-8v-4zm4 0h8V6h-8z" />
    </Svg>
  );
}
