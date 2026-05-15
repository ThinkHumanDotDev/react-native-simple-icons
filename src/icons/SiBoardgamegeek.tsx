import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiBoardgamegeekHex = "FF5100";
export const SiBoardgamegeekTitle = "BoardGameGeek";
export const SiBoardgamegeekSlug = "boardgamegeek";

export function SiBoardgamegeek({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiBoardgamegeekHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiBoardgamegeekTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m19.7 4.44-2.38.64L19.65 0 4.53 5.56l.83 6.67-1.4 1.34L8.12 24l8.85-3.26 3.07-7.22-1.32-1.27.98-7.81Z" />
    </Svg>
  );
}
