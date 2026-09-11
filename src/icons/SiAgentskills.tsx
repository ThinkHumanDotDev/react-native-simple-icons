import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiAgentskillsHex = "000000";
export const SiAgentskillsTitle = "Agent Skills";
export const SiAgentskillsSlug = "agentskills";

export function SiAgentskills({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiAgentskillsHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiAgentskillsTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m12 0 10.392 6v12L12 24 1.608 18V6Z" />
    </Svg>
  );
}
