import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiDigikeyelectronicsHex = "CC0000";
export const SiDigikeyelectronicsTitle = "Digi-Key Electronics";
export const SiDigikeyelectronicsSlug = "digikeyelectronics";

export function SiDigikeyelectronics({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiDigikeyelectronicsHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiDigikeyelectronicsTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12.246.221A11.786 11.786 0 0 1 23.89 10.418c.912 6.593-3.944 12.711-10.558 13.297-.454.04-.912.063-1.369.064l-10.705.003v-3.749H0V3.987h1.222V.218l11.024.003zM17.9 19.423l-8.26-7.422 8.25-7.422h-6.938L5.615 9.361V4.598H.56v14.803h5.105v-4.724l5.289 4.746H17.9z" />
    </Svg>
  );
}
