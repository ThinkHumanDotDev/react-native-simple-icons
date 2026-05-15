import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiPortableappsdotcomHex = "818F95";
export const SiPortableappsdotcomTitle = "PortableApps.com";
export const SiPortableappsdotcomSlug = "portableappsdotcom";

export function SiPortableappsdotcom({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiPortableappsdotcomHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiPortableappsdotcomTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12 0C7.977 0 4.419 1.984 2.24 5.022c-1.816 4.295.987 7.619 4.001 7.532 2.925-.084 5.264-1.365 7.04-3.4l-3.02-3.015h10.635l-.037 10.577-2.788-2.782c-2.739 2.974-5.493 5.443-9.741 5.208C3.168 18.855.553 14.7.09 10.558.033 11.032 0 11.512 0 12 0 18.63 5.37 24 12 24s12-5.371 12-12S18.625 0 12 0z" />
    </Svg>
  );
}
