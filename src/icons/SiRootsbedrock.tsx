import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiRootsbedrockHex = "525DDC";
export const SiRootsbedrockTitle = "Roots Bedrock";
export const SiRootsbedrockSlug = "rootsbedrock";

export function SiRootsbedrock({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiRootsbedrockHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiRootsbedrockTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M.4 0L0 .4v5.2l.343.343 11.314-1.886L12 4.4V8l11.52-1.92.48-.48V.4l-.4-.4zm.08 9.92L0 10.4v3.2l.343.343L12 12V8zM12 12v4l11.52-1.92.48-.48v-3.2l-.343-.343zM.48 17.92L0 18.4v5.2l.4.4h23.2l.4-.4v-5.2l-.343-.343-11.314 1.886L12 19.6V16L.48 17.92z" />
    </Svg>
  );
}
