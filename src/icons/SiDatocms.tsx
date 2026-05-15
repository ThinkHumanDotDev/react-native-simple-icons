import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiDatocmsHex = "FF7751";
export const SiDatocmsTitle = "DatoCMS";
export const SiDatocmsSlug = "datocms";

export function SiDatocms({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiDatocmsHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiDatocmsTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12 0H.076v24H12c5.964 0 11.924-5.373 11.924-11.998C23.924 5.376 17.963 0 12 0zm0 17.453a5.453 5.453 0 115.455-5.451A5.45 5.45 0 0112 17.452z" />
    </Svg>
  );
}
