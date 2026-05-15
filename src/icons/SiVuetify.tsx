import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiVuetifyHex = "1867C0";
export const SiVuetifyTitle = "Vuetify";
export const SiVuetifySlug = "vuetify";

export function SiVuetify({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiVuetifyHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiVuetifyTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M6.312 12.564 12.636 1.2H0l6.312 11.364ZM14.94 1.2 7.464 14.64 12 22.8 24 1.2h-9.06Zm4.98 2.4L12 17.856l-1.788-3.216L16.344 3.6h3.576ZM6.312 7.62 4.08 3.6h4.476L6.312 7.62Z" />
    </Svg>
  );
}
