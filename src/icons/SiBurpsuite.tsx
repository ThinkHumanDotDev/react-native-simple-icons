import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiBurpsuiteHex = "FF6633";
export const SiBurpsuiteTitle = "Burp Suite";
export const SiBurpsuiteSlug = "burpsuite";

export function SiBurpsuite({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiBurpsuiteHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiBurpsuiteTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 0v24h24V0Zm11.063 3.357h1.874v2.756L10.41 9.2h2.527v3.748h4.579l-4.578 5.592v2.104h-1.876v-2.758l2.528-3.086h-2.527V11.05h-4.58l4.58-5.592Z" />
    </Svg>
  );
}
