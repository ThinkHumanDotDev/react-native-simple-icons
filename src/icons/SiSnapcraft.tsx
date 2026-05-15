import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiSnapcraftHex = "E95420";
export const SiSnapcraftTitle = "Snapcraft";
export const SiSnapcraftSlug = "snapcraft";

export function SiSnapcraft({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiSnapcraftHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiSnapcraftTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M8.17 11.335a.106.106 0 0 0-.173.022L1.754 23.466a.105.105 0 0 0 .032.133c.04.029.101.027.138-.012l8.89-9.11a.107.107 0 0 0 .005-.144l-2.649-3Zm9.76-3.519L.146.39C.041.346-.047.478.028.56l12.034 12.874a.11.11 0 0 0 .075.034.102.102 0 0 0 .075-.03L17.96 7.99a.106.106 0 0 0-.032-.174Zm6.047.547-2.188-4.405a.21.21 0 0 0-.189-.117h-8.77a.212.212 0 0 0-.08.408l10.96 4.405a.211.211 0 0 0 .268-.29z" />
    </Svg>
  );
}
