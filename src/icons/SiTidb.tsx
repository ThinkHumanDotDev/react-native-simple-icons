import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiTidbHex = "DC150B";
export const SiTidbTitle = "TiDB";
export const SiTidbSlug = "tidb";

export function SiTidb({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiTidbHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiTidbTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12 0 1.609 6.001v11.998L11.999 24l10.393-6.001V6.001ZM8.535 17.999v-7.998L5.07 12V8L12 4l3.462 2-3.464 2.001v12Zm6.93 0v-7.997l3.464-2v7.997z" />
    </Svg>
  );
}
