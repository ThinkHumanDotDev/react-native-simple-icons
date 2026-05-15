import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiMaterialformkdocsHex = "526CFE";
export const SiMaterialformkdocsTitle = "Material for MkDocs";
export const SiMaterialformkdocsSlug = "materialformkdocs";

export function SiMaterialformkdocs({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiMaterialformkdocsHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiMaterialformkdocsTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m17.029 18.772.777 1.166-5.417 2.709L0 16.451V4.063l5.417-2.709 5.298 7.948 7.867-5.24L24 1.354V16.84l-5.417 2.709zm2.023-13.827v13.253l3.949-1.975V2.97zM5.076 2.642 1.458 4.45 12.73 21.358l3.618-1.809z" />
    </Svg>
  );
}
