import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiDatadotaiHex = "000000";
export const SiDatadotaiTitle = "data.ai";
export const SiDatadotaiSlug = "datadotai";

export function SiDatadotai({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiDatadotaiHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiDatadotaiTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M8.12 1.744.015 10.009 0 10.023l11.986 12.219.014.015 11.986-12.22.014-.014-8.115-8.273-.006-.006Zm1.207 1.02h5.326L11.99 5.41zm3.422 3.43 3.027-3.053L22.081 9.5h-6.054ZM8.211 3.14l3.04 3.072L7.999 9.5h-6.08Zm.62 6.977L12 6.876l3.169 3.242L12 19.842zm7.328.402h5.862l-8.793 9.005Zm-14.24 0h5.915l2.958 9.006Z" />
    </Svg>
  );
}
