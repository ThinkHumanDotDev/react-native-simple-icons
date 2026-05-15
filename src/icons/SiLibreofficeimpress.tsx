import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiLibreofficeimpressHex = "D0120D";
export const SiLibreofficeimpressTitle = "LibreOffice Impress";
export const SiLibreofficeimpressSlug = "libreofficeimpress";

export function SiLibreofficeimpress({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiLibreofficeimpressHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiLibreofficeimpressTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M22 0v7l-7-7h7zm-9 0 9 9v12c0 1.662-1.338 3-3 3H5c-1.662 0-3-1.338-3-3V3c0-1.662 1.338-3 3-3h8zM7 17H6v1h1v-1zm0-2H6v1h1v-1zm0-2H6v1h1v-1zm3 4H8v1h2v-1zm0-2H8v1h2v-1zm0-2H8v1h2v-1zm6-1v-1H8v1h8zm2 1h-7v5h7v-5zm0-4H6v1h12V9zm-4 6.707 1 1 2.207-2.207-.707-.707-1.5 1.5-1-1-2.207 2.207.707.707 1.5-1.5z" />
    </Svg>
  );
}
