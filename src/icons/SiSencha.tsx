import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiSenchaHex = "86BC40";
export const SiSenchaTitle = "Sencha";
export const SiSenchaSlug = "sencha";

export function SiSencha({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiSenchaHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiSenchaTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M15.287,24c0.458-1.221,0.917-1.532,0.917-2.442c0-1.452-0.878-2.8-2.237-3.434 l-5.831-2.813C5.211,13.85,3.392,10.97,3.392,7.797c0-3.23,1.867-6.133,4.871-7.576L8.712,0C8.129,0.674,7.796,1.532,7.796,2.44 c0,1.453,0.878,2.801,2.237,3.435l5.831,2.813c2.926,1.462,4.744,4.342,4.744,7.514c0,3.23-1.867,6.133-4.871,7.577L15.287,24" />
    </Svg>
  );
}
