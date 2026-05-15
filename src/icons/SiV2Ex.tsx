import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiV2ExHex = "1F1F1F";
export const SiV2ExTitle = "V2EX";
export const SiV2ExSlug = "v2ex";

export function SiV2Ex({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiV2ExHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiV2ExTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M.671 1.933h13.821a1.342 1.342 0 0 1 .98.425l8.166 8.725a1.342 1.342 0 0 1 0 1.834l-8.166 8.724a1.342 1.342 0 0 1-.98.426H.673A.671.671 0 0 1 0 21.395v-6.878h13.19l2.276-2.28a.336.336 0 0 0 0-.474l-2.276-2.28H0V2.604a.671.671 0 0 1 .671-.671Z" />
    </Svg>
  );
}
