import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiEquinixmetalHex = "ED2224";
export const SiEquinixmetalTitle = "Equinix Metal";
export const SiEquinixmetalSlug = "equinixmetal";

export function SiEquinixmetal({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiEquinixmetalHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiEquinixmetalTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M22.399 7.789v7.005l-1.599.56V7.231L16 5.557v11.472l-1.601.557V4.996L12 4.16l-2.4.836v12.59l-1.599-.557V5.557L3.2 7.232v8.121l-1.599-.56V7.79L0 8.349v7.582l4.801 1.676v-9.24l1.6-.558v10.356L11.2 19.84V6.133l.8-.28.8.28v13.708l4.801-1.676V7.809l1.599.558v9.24L24 15.93V8.349z" />
    </Svg>
  );
}
