import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiBookmeterHex = "64BC4B";
export const SiBookmeterTitle = "Bookmeter";
export const SiBookmeterSlug = "bookmeter";

export function SiBookmeter({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiBookmeterHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiBookmeterTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M.678 14.262h6.089V24H.678v-9.738zm8.215 9.717h6.089V7.11H8.893v16.869zM17.234 0v24h6.089V0h-6.089z" />
    </Svg>
  );
}
