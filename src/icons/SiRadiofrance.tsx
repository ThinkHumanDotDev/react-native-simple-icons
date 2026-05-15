import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiRadiofranceHex = "2B00E7";
export const SiRadiofranceTitle = "Radio France";
export const SiRadiofranceSlug = "radiofrance";

export function SiRadiofrance({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiRadiofranceHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiRadiofranceTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12 24C6.144 24 1.397 19.497 1.397 13.94a9.6 9.6 0 0 1 .208-1.991h5.99a4.4 4.4 0 0 0-.474 1.991c0 2.557 2.184 4.63 4.88 4.63.6 0 1.175-.104 1.706-.292v5.592Q12.872 24 12 24m10.355-7.888H16.31a4.4 4.4 0 0 0 .57-2.172c0-2.557-2.184-4.63-4.879-4.63-.504 0-.99.073-1.448.208V0h5.25v4.546c3.978 1.45 6.802 5.109 6.802 9.394a9.6 9.6 0 0 1-.249 2.172" />
    </Svg>
  );
}
