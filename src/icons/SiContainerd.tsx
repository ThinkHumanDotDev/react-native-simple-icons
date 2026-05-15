import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiContainerdHex = "575757";
export const SiContainerdTitle = "containerd";
export const SiContainerdSlug = "containerd";

export function SiContainerd({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiContainerdHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiContainerdTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M3.629 0v24H20.37V0zM17.59 21.208H6.421V10.604h7.812V6.692h3.346v14.516zm-7.823-7.812h4.466v5.02H9.767z" />
    </Svg>
  );
}
