import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiVbulletinHex = "184D66";
export const SiVbulletinTitle = "vBulletin";
export const SiVbulletinSlug = "vbulletin";

export function SiVbulletin({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiVbulletinHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiVbulletinTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M1.09 10.316V24h21.82V0h-2.417l-5.461 19.613h-6.09l-3.134-9.246zm9.283-4.444l1.363 6.308L13.955 0H1.089v5.872Z" />
    </Svg>
  );
}
