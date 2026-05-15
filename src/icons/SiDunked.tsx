import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiDunkedHex = "2DA9D7";
export const SiDunkedTitle = "Dunked";
export const SiDunkedSlug = "dunked";

export function SiDunked({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiDunkedHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiDunkedTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M13.799 0v19.8599A4.2002 4.2002 0 0018.0003 24h4.2002V4.1411A4.2002 4.2002 0 0017.9992 0H13.798zM6.2983 15.0014a4.5008 4.5008 0 00-4.4988 4.3906v.2224a4.5008 4.5008 0 008.9986 0v-.2154a4.5008 4.5008 0 00-4.4998-4.3986z" />
    </Svg>
  );
}
