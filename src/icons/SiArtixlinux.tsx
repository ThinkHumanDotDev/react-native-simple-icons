import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiArtixlinuxHex = "10A0CC";
export const SiArtixlinuxTitle = "Artix Linux";
export const SiArtixlinuxSlug = "artixlinux";

export function SiArtixlinux({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiArtixlinuxHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiArtixlinuxTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12 0L7.873 8.462l11.358 6.363zM6.626 11.018L.295 24l18.788-7.762zm13.846 6.352l-5.926 3.402L23.706 24Z" />
    </Svg>
  );
}
