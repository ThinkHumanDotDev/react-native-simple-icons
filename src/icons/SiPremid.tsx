import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiPremidHex = "7289DA";
export const SiPremidTitle = "PreMiD";
export const SiPremidSlug = "premid";

export function SiPremid({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiPremidHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiPremidTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M22.46 4.075c.85 0 1.54.69 1.54 1.54v12.77c0 .85-.69 1.54-1.54 1.54H1.54c-.85 0-1.54-.69-1.54-1.54V5.615c0-.85.69-1.54 1.54-1.54ZM3.442 8.485c-.4 0-.725.323-.725.724v5.673a.725.725 0 0 0 1.08.631l5.043-2.836a.725.725 0 0 0 0-1.263L3.797 8.577a.7.7 0 0 0-.355-.093m17.162 5.372h-7.698a.68.68 0 1 0 0 1.358h7.698a.68.68 0 1 0 0-1.358m0-2.446h-7.698a.68.68 0 1 0 0 1.359h7.698a.68.68 0 1 0 0-1.359m-3.17-2.445h-4.528a.68.68 0 1 0 0 1.359h4.528a.68.68 0 1 0 0-1.359" />
    </Svg>
  );
}
