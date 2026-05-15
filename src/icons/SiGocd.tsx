import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiGocdHex = "94399E";
export const SiGocdTitle = "GoCD";
export const SiGocdSlug = "gocd";

export function SiGocd({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiGocdHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiGocdTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M18.043 13.237l-8.907 5.935a1.47 1.47 0 01-.823.25 1.449 1.449 0 01-.696-.173 1.48 1.48 0 01-.784-1.308V12a1.482 1.482 0 112.957 0v3.163L14.537 12 7.478 7.304A1.49 1.49 0 119.13 4.823l8.913 5.94a1.492 1.492 0 010 2.474M12 0a12 12 0 1012 12A12.012 12.012 0 0012 0" />
    </Svg>
  );
}
