import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiIberiaHex = "D7192D";
export const SiIberiaTitle = "Iberia";
export const SiIberiaSlug = "iberia";

export function SiIberia({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiIberiaHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiIberiaTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M9.356 11.563c4.53-3.254 9.047-5.217 13.547-5.723L24 2.978c-6.662 0-7.57 1.457-9.873 3.752M0 21.021c14.719 0 18.189-3.46 20.213-8.17l1.7-4.434c-4.958.143-12.441 3.066-17.673 8.324" />
    </Svg>
  );
}
