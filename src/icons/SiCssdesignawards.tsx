import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiCssdesignawardsHex = "280FEE";
export const SiCssdesignawardsTitle = "CSS Design Awards";
export const SiCssdesignawardsSlug = "cssdesignawards";

export function SiCssdesignawards({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiCssdesignawardsHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiCssdesignawardsTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m7.46.93-7.46 7.38 3.73 3.73 3.74 3.65 3.73 3.65 3.74-3.65-7.47-7.38 7.47-7.4zm5.33 3.73-3.67 3.65 7.39 7.38-7.46 7.4h7.46l3.76-3.66 3.73-3.73-3.73-3.65-3.74-3.73z" />
    </Svg>
  );
}
