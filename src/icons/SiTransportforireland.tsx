import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiTransportforirelandHex = "00B274";
export const SiTransportforirelandTitle = "Transport for Ireland";
export const SiTransportforirelandSlug = "transportforireland";

export function SiTransportforireland({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiTransportforirelandHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiTransportforirelandTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 0v12c0 6.62 5.38 12 12 12h12V11.978h-.022c0-6.62-5.38-11.978-12-11.978zm3.376 8.145h6.337v1.546h-2.33v6.12H5.706v-6.12h-2.33zm8.014 0h5.837V9.67h-4.138v1.633h3.659v1.546h-3.659v2.962H11.39zm7.535 0h1.678v7.666h-1.678Z" />
    </Svg>
  );
}
