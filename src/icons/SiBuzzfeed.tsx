import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiBuzzfeedHex = "EE3322";
export const SiBuzzfeedTitle = "BuzzFeed";
export const SiBuzzfeedSlug = "buzzfeed";

export function SiBuzzfeed({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiBuzzfeedHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiBuzzfeedTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-4.148-.273l-.977-6.94-6.5 2.624 2.575 1.487-2.435 4.215L8.3 10.68l-4.153 7.19 2.327 1.346 2.812-4.868L13.5 16.78l3.777-6.54 2.575 1.487z" />
    </Svg>
  );
}
