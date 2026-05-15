import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiQltyHex = "66FAEC";
export const SiQltyTitle = "Qlty";
export const SiQltySlug = "qlty";

export function SiQlty({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiQltyHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiQltyTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12.453 20.437h10.204V24H12.453Zm2.456-.8 8.868-9.812L14.897 0l-2.444 2.7 6.437 7.125-6.437 7.124ZM9.102 0 .223 9.825l8.868 9.814 2.456-2.69L5.11 9.825 11.55 2.7Z" />
    </Svg>
  );
}
