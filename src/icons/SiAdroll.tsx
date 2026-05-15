import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiAdrollHex = "0DBDFF";
export const SiAdrollTitle = "Adroll";
export const SiAdrollSlug = "adroll";

export function SiAdroll({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiAdrollHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiAdrollTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M24 12c0-6.01-4.727-10.886-10.886-10.886a10.863 10.863 0 0 0-9.508 5.578L8.914 12c0-2.323 1.958-4.2 4.2-4.2 2.377 0 4.2 1.877 4.2 4.2s-1.836 4.2-4.2 4.2H4.065A4.07 4.07 0 0 0 0 20.266v2.62h13.114C19.232 22.886 24 18.01 24 12" />
    </Svg>
  );
}
