import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiNamebaseHex = "0068FF";
export const SiNamebaseTitle = "Namebase";
export const SiNamebaseSlug = "namebase";

export function SiNamebase({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiNamebaseHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiNamebaseTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M23.0978 2.406c0 1.3288-1.0516 2.406-2.3488 2.406s-2.3487-1.0772-2.3487-2.406S19.4519 0 20.7491 0s2.3487 1.0772 2.3487 2.406zm-11.5089.5415C5.6868 2.9475.9022 7.8488.9022 13.8948V24h6.5764V13.8948c0-2.3254 1.8403-4.2105 4.1103-4.2105s4.1103 1.8851 4.1103 4.2105V24h6.5764V13.8948c0-6.046-4.7846-10.9473-10.6867-10.9473z" />
    </Svg>
  );
}
