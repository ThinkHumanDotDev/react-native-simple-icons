import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiTaskHex = "29BEB0";
export const SiTaskTitle = "Task";
export const SiTaskSlug = "task";

export function SiTask({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiTaskHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiTaskTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M1.857 18.013 11.736 24V12.456L1.857 6.468Zm20.286 0V6.468l-9.879 5.988V24Zm-.246-12.014L12 0 2.103 5.999 12 11.998Z" />
    </Svg>
  );
}
