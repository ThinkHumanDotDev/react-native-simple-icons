import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiVisxHex = "FF1231";
export const SiVisxTitle = "visx";
export const SiVisxSlug = "visx";

export function SiVisx({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiVisxHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiVisxTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M.00195 0 12 11.51953 23.99805 0h-5.8711L12 6.08984 5.87305 0Zm23.9961 0L12.47852 11.99805l11.51953 11.99804V18.125l-6.08985-6.12695 6.08985-6.12696ZM.00195.0039V5.875l6.08985 6.12695-6.08985 6.12696V24l11.5039-11.99805Zm0 23.9961h5.8711L12 17.91016 18.12695 24h5.8711L12 12.4707Z" />
    </Svg>
  );
}
