import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiDeutschetelekomHex = "E20074";
export const SiDeutschetelekomTitle = "Deutsche Telekom";
export const SiDeutschetelekomSlug = "deutschetelekom";

export function SiDeutschetelekom({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiDeutschetelekomHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiDeutschetelekomTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M6.722 15.84h-4.8v-4.8h4.791v4.8zM1.922 0v8.16H3.36v-.236c0-3.844 2.159-6.24 6.239-6.24h.237v17.279c0 2.396-.957 3.36-3.36 3.36h-.72V24h12.478v-1.676h-.72c-2.395 0-3.36-.957-3.36-3.361V1.676h.237c4.08 0 6.239 2.396 6.239 6.24v.236h1.439V0Zm15.356 15.84h4.8v-4.8h-4.791v4.8z" />
    </Svg>
  );
}
