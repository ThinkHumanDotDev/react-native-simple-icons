import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiEclipsecheHex = "525C86";
export const SiEclipsecheTitle = "Eclipse Che";
export const SiEclipsecheSlug = "eclipseche";

export function SiEclipseche({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiEclipsecheHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiEclipsecheTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12 0L1.604 6.021v7.452L12 7.494l3.941 2.254 6.455-3.727zm10.396 10.527L12 16.506l-7.334-4.217-3.062 1.76v3.93L12 24l10.396-6.021z" />
    </Svg>
  );
}
