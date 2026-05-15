import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiBitsyHex = "6767B2";
export const SiBitsyTitle = "Bitsy";
export const SiBitsySlug = "bitsy";

export function SiBitsy({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiBitsyHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiBitsyTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M17.143 12v10.29h-3.429v-3.43H6.857v3.43H3.43v-6.86H0V1.71h3.429v3.43h3.428V1.71h3.429V12Zm3.428-3.43V1.71H24v6.86ZM17.143 12V8.57h3.428V12Z" />
    </Svg>
  );
}
