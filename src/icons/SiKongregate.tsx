import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiKongregateHex = "F04438";
export const SiKongregateTitle = "Kongregate";
export const SiKongregateSlug = "kongregate";

export function SiKongregate({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiKongregateHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiKongregateTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M2.667 0A2.667 2.667 0 0 0 0 2.667v18.666A2.667 2.667 0 0 0 2.667 24h18.666A2.667 2.667 0 0 0 24 21.333V2.667A2.667 2.667 0 0 0 21.333 0ZM5.6 5.333h2.667v5.334H13.6v2.666H8.267v5.334H5.6Zm8 8h1.678a1.6 1.6 0 0 1 1.43.885L17.6 16h1.333v2.667h-2.666zm0-2.666 2.667-5.334h2.666V8H17.6l-.891 1.782a1.6 1.6 0 0 1-1.431.885z" />
    </Svg>
  );
}
