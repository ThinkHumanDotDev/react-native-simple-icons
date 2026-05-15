import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiReasonstudiosHex = "FFFFFF";
export const SiReasonstudiosTitle = "Reason Studios";
export const SiReasonstudiosSlug = "reasonstudios";

export function SiReasonstudios({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiReasonstudiosHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiReasonstudiosTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M2.49 5.114l8.3-4.79a2.421 2.421 0 012.39-.017l.03.017 8.299 4.79c.74.427 1.2 1.212 1.211 2.065V16.79c0 .854-.451 1.645-1.184 2.08l-.027.016-8.299 4.79a2.42 2.42 0 01-2.39.017l-.03-.017-8.3-4.79a2.421 2.421 0 01-1.21-2.065V7.21c0-.855.45-1.645 1.184-2.08l.026-.016 8.3-4.79zM12 4.026L5.092 8.013v7.974L12 19.974V12l6.908-3.987z" />
    </Svg>
  );
}
