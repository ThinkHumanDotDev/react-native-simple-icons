import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiConventionalcommitsHex = "FE5196";
export const SiConventionalcommitsTitle = "Conventional Commits";
export const SiConventionalcommitsSlug = "conventionalcommits";

export function SiConventionalcommits({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiConventionalcommitsHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiConventionalcommitsTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12 0C5.382 0 0 5.382 0 12s5.382 12 12 12 12-5.382 12-12S18.618 0 12 0zm0 1.6c5.753 0 10.4 4.647 10.4 10.4S17.753 22.4 12 22.4 1.6 17.753 1.6 12 6.247 1.6 12 1.6z" />
    </Svg>
  );
}
