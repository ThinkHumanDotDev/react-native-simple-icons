import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiAnydeskHex = "EF443B";
export const SiAnydeskTitle = "AnyDesk";
export const SiAnydeskSlug = "anydesk";

export function SiAnydesk({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiAnydeskHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiAnydeskTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M8.322 3.677L0 12l8.322 8.323L16.645 12zm7.371.01l-1.849 1.85 6.49 6.456-6.49 6.49 1.85 1.817L24 11.993Z" />
    </Svg>
  );
}
