import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiSpreadshirtHex = "00B2A5";
export const SiSpreadshirtTitle = "Spreadshirt";
export const SiSpreadshirtSlug = "spreadshirt";

export function SiSpreadshirt({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiSpreadshirtHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiSpreadshirtTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12 6.306L7.796 2.102 0 9.898l12 12 12-12-7.796-7.796zm0 12L3.592 9.898l4.204-4.204L12 9.898l4.184-4.184 4.204 4.204" />
    </Svg>
  );
}
