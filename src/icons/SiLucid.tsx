import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiLucidHex = "282C33";
export const SiLucidTitle = "Lucid";
export const SiLucidSlug = "lucid";

export function SiLucid({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiLucidHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiLucidTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12 0 3.694 4.8V24L12 19.2Zm0 19.2v4.502h8.305V14.4Z" />
    </Svg>
  );
}
