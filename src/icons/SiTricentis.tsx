import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiTricentisHex = "12438C";
export const SiTricentisTitle = "Tricentis";
export const SiTricentisSlug = "tricentis";

export function SiTricentis({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiTricentisHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiTricentisTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M14.271 10.42 6.86 3.006 9.833.034l4.438 4.438L18.742 0l2.974 2.974ZM9.825 24l-2.973-2.974 7.445-7.445 7.412 7.412-2.974 2.973-4.438-4.437zm-4.567-4.568-2.974-2.974 4.47-4.47-4.437-4.439 2.974-2.974 7.412 7.412Z" />
    </Svg>
  );
}
