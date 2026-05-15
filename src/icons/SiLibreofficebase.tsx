import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiLibreofficebaseHex = "7324A9";
export const SiLibreofficebaseTitle = "LibreOffice Base";
export const SiLibreofficebaseSlug = "libreofficebase";

export function SiLibreofficebase({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiLibreofficebaseHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiLibreofficebaseTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M17 13h-1v-1h1v1zm0 1h-1v1h1v-1zm0 2h-1v1h1v-1zm-.6-16H15l7 7V0h-5.6zM13 0l9 9v12c0 1.662-1.338 3-3 3H5c-1.662 0-3-1.338-3-3V3c0-1.662 1.338-3 3-3h8zM6 11c0 .552 1.343 1 3 1s3-.448 3-1v-1c0-.552-1.343-1-3-1s-3 .448-3 1v1zm0 2c0 .552 1.343 1 3 1s3-.448 3-1v-1c0 .552-1.343 1-3 1s-3-.448-3-1v1zm0 2c0 .552 1.343 1 3 1s3-.448 3-1v-1c0 .552-1.343 1-3 1s-3-.448-3-1v1zm0 2c0 .552 1.343 1 3 1s3-.448 3-1v-1c0 .552-1.343 1-3 1s-3-.448-3-1v1zm12-6h-5v7h5v-7zm-3 1h-1v1h1v-1zm0 4h-1v1h1v-1zm0-2h-1v1h1v-1z" />
    </Svg>
  );
}
