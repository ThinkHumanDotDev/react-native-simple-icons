import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiPaloaltonetworksHex = "F04E23";
export const SiPaloaltonetworksTitle = "Palo Alto Networks";
export const SiPaloaltonetworksSlug = "paloaltonetworks";

export function SiPaloaltonetworks({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiPaloaltonetworksHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiPaloaltonetworksTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m10.278 15.443 1.705 1.705-3.426 3.426-3.427-3.426 8.592-8.591-1.705-1.705 3.426-3.426 3.427 3.426-8.592 8.591zM0 12.017l3.426 3.426 8.591-8.59-3.426-3.427L0 12.017zm11.983 5.13 3.426 3.427L24 11.983l-3.426-3.426-8.591 8.59z" />
    </Svg>
  );
}
