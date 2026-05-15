import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiPinoHex = "687634";
export const SiPinoTitle = "pino";
export const SiPinoSlug = "pino";

export function SiPino({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiPinoHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiPinoTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m9.225 5.555 2.789 5.472 2.756-5.505L11.999 0M1.979 20.123h13.769v-.037L8.862 6.29m3.524 5.522 4.131 8.311h5.505L15.137 6.291M4.5 24h14.87l-1.554-3.188H6.056" />
    </Svg>
  );
}
