import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiVoipdotmsHex = "E1382D";
export const SiVoipdotmsTitle = "VoIP.ms";
export const SiVoipdotmsSlug = "voipdotms";

export function SiVoipdotms({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiVoipdotmsHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiVoipdotmsTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M17.51 2.372c-.946 0-1.877.24-2.71.696a5.721 5.721 0 0 0-2.055 1.92l-5.177 8.047c-.928 1.446-3.076 1.656-3.92.943l4.051 6.343c.258.402.611.731 1.027.96a2.808 2.808 0 0 0 2.706 0 2.85 2.85 0 0 0 1.025-.96L24 2.371ZM0 8.309l2.228 3.521s.89 1.302 2.402 1.302c1.513 0 2.378-1.302 2.378-1.302l2.23-3.52Z" />
    </Svg>
  );
}
