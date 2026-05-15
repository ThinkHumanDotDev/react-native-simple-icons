import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiVorondesignHex = "ED3023";
export const SiVorondesignTitle = "Voron Design";
export const SiVorondesignSlug = "vorondesign";

export function SiVorondesign({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiVorondesignHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiVorondesignTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12 0 1.6078 6v12L12 24l10.3922-6V6L12.0001 0zM8.3242 5.3765h3L7.5 12.0001h-3l3.8241-6.6236zm6 0h3L9.676 18.6235h-3l7.6482-13.247zm2.176 6.6236h3l-3.8242 6.6235h-3L16.5 12z" />
    </Svg>
  );
}
