import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiFortniteHex = "000000";
export const SiFortniteTitle = "Fortnite";
export const SiFortniteSlug = "fortnite";

export function SiFortnite({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiFortniteHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiFortniteTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m15.767 14.171.097-5.05H12.4V5.197h3.99L16.872 0H7.128v24l5.271-.985V14.17z" />
    </Svg>
  );
}
