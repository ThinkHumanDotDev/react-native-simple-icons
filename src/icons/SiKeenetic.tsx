import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiKeeneticHex = "009EE2";
export const SiKeeneticTitle = "Keenetic";
export const SiKeeneticSlug = "keenetic";

export function SiKeenetic({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiKeeneticHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiKeeneticTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M15.718 10.188 24 2.376h-6.588L9.788 9.812H4.33V2.376H0v19.248h4.33V14.14h7.623c3.2 0 5.412.706 6.588 2.07.706.8 1.035 1.883 1.035 3.248v2.165h4.33v-2.165c0-2.353-.706-4.424-2.07-6.024-1.46-1.647-3.483-2.776-6.118-3.247" />
    </Svg>
  );
}
