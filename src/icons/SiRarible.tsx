import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiRaribleHex = "FEDA03";
export const SiRaribleTitle = "Rarible";
export const SiRaribleSlug = "rarible";

export function SiRarible({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiRaribleHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiRaribleTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M4.8 0A4.79 4.79 0 000 4.8v14.4A4.79 4.79 0 004.8 24h14.4a4.79 4.79 0 004.8-4.8V4.8A4.79 4.79 0 0019.2 0zm1.32 7.68h8.202c2.06 0 3.666.44 3.666 2.334 0 1.137-.671 1.702-1.427 1.898.904.268 1.558 1 1.558 2.16v2.131h-3.451V14.18c0-.62-.37-.87-1-.87H9.572v2.893H6.12zm3.452 2.5v.834h4.155c.452 0 .726-.06.726-.416 0-.358-.274-.418-.726-.418z" />
    </Svg>
  );
}
