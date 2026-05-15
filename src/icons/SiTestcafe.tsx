import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiTestcafeHex = "36B6E5";
export const SiTestcafeTitle = "TestCafe";
export const SiTestcafeSlug = "testcafe";

export function SiTestcafe({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiTestcafeHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiTestcafeTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m20.315 4.319-8.69 8.719-3.31-3.322-2.069 2.076 5.379 5.398 10.76-10.796zM5.849 14.689 0 19.682h24l-5.864-4.991h-3.2l-1.024.896h3.584l3.072 2.815H3.417l3.072-2.815h2.688l-.896-.896z" />
    </Svg>
  );
}
