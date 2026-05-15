import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiBackstageCastingHex = "000000";
export const SiBackstageCastingTitle = "Backstage";
export const SiBackstageCastingSlug = "backstage_casting";

export function SiBackstageCasting({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiBackstageCastingHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiBackstageCastingTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M10.2 0v.056a5.997 5.997 0 0 1 0 11.886v.113a5.997 5.997 0 0 1 0 11.886v.056h12.552V0ZM1.248 0v24H9.54V0Z" />
    </Svg>
  );
}
