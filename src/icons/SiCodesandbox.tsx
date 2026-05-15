import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiCodesandboxHex = "151515";
export const SiCodesandboxTitle = "CodeSandbox";
export const SiCodesandboxSlug = "codesandbox";

export function SiCodesandbox({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiCodesandboxHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiCodesandboxTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 24H24V0H0V2.45455H21.5455V21.5455H2.45455V0H0Z" />
    </Svg>
  );
}
