import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiExoscaleHex = "DA291C";
export const SiExoscaleTitle = "Exoscale";
export const SiExoscaleSlug = "exoscale";

export function SiExoscale({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiExoscaleHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiExoscaleTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12 1.608 0 22.392h1.665L12 4.593v2.929l-8.612 14.87H5.11L12 10.507v2.986l-5.167 8.9h1.722L12 16.477v2.929l-1.722 2.985H24Z" />
    </Svg>
  );
}
