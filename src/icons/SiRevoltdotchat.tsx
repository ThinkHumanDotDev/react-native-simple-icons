import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiRevoltdotchatHex = "FF4655";
export const SiRevoltdotchatTitle = "Revolt.chat";
export const SiRevoltdotchatSlug = "revoltdotchat";

export function SiRevoltdotchat({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiRevoltdotchatHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiRevoltdotchatTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M17.005 7.796c0 1.88-1.023 3.009-3.207 3.009h-3.615v-5.95H13.8c2.183 0 3.206 1.162 3.206 2.94zM.853 0l3.5 4.866v19.133h5.832v-9.06h1.398L16.563 24h6.583l-5.525-9.504a6.966 6.966 0 0 0 3.879-2.532 7 7 0 0 0 1.44-4.408C22.94 3.384 20.009 0 14.143 0h-9.79z" />
    </Svg>
  );
}
