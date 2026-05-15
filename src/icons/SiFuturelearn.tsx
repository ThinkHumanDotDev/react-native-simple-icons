import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiFuturelearnHex = "DE00A5";
export const SiFuturelearnTitle = "FutureLearn";
export const SiFuturelearnSlug = "futurelearn";

export function SiFuturelearn({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiFuturelearnHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiFuturelearnTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M22.081.61v7.566h-7.223v6.661H7.566v6.634H0v1.92h9.471v-6.649h7.306v-6.66H24V.61Z" />
    </Svg>
  );
}
