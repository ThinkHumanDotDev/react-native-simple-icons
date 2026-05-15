import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiLonghornHex = "5F224B";
export const SiLonghornTitle = "Longhorn";
export const SiLonghornSlug = "longhorn";

export function SiLonghorn({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiLonghornHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiLonghornTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M21.46 2.172H2.54A2.55 2.55 0 0 0 0 4.712v14.575a2.55 2.55 0 0 0 2.54 2.54h18.92a2.55 2.55 0 0 0 2.54-2.54V4.713a2.55 2.55 0 0 0-2.54-2.54m.427 5.138-.31 2.1a1.24 1.24 0 0 1-.98 1.032l-5.024 1.003-.002.015-.787 4.306a2.474 2.474 0 0 1-2.467 2.34h-.634a2.474 2.474 0 0 1-2.468-2.355l-.697-4.288-5.115-1.021a1.24 1.24 0 0 1-.98-1.032l-.31-2.1a1.235 1.235 0 0 1 2.445-.36L4.74 8.19 12 9.639l7.26-1.45.182-1.24a1.235 1.235 0 0 1 2.445.36M12 12.134a1.2 1.2 0 0 1-.242-.024l-.653-.13.562 3.457a1 1 0 0 1 .016.198h.634a1.2 1.2 0 0 1 .02-.222l.63-3.448-.725.145a1.2 1.2 0 0 1-.242.024" />
    </Svg>
  );
}
