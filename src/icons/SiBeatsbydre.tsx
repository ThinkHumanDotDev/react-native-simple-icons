import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiBeatsbydreHex = "E01F3D";
export const SiBeatsbydreTitle = "Beats by Dre";
export const SiBeatsbydreSlug = "beatsbydre";

export function SiBeatsbydre({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiBeatsbydreHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiBeatsbydreTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12.0099 15.5996A3.5995 3.5995 0 1 0 8.4103 12a3.5995 3.5995 0 0 0 3.5996 3.5996zm0-15.5981a11.9985 11.9985 0 0 0-3.5996.552v6.6471A5.9992 5.9992 0 1 1 6.0106 12V1.6033A11.9985 11.9985 0 1 0 12.01.0015z" />
    </Svg>
  );
}
