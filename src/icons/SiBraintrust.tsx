import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiBraintrustHex = "000000";
export const SiBraintrustTitle = "Braintrust";
export const SiBraintrustSlug = "braintrust";

export function SiBraintrust({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiBraintrustHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiBraintrustTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 12.002C0 5.372 5.374-.002 12.001-.002 18.626-.002 24 5.372 24 12.002c0 6.625-5.374 12-11.999 12h-9.98a2.01 2.01 0 0 1-2.013-2.013V12.01zm0 0" />
    </Svg>
  );
}
