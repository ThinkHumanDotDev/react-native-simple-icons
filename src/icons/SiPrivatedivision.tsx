import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiPrivatedivisionHex = "000000";
export const SiPrivatedivisionTitle = "Private Division";
export const SiPrivatedivisionSlug = "privatedivision";

export function SiPrivatedivision({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiPrivatedivisionHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiPrivatedivisionTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12.384.248A.422.422 0 0 0 11.998 0a.427.427 0 0 0-.387.248L6.172 12.002l5.441 11.752a.428.428 0 0 0 .616.18.428.428 0 0 0 .157-.18l5.443-11.752L12.384.248Zm-.386 18.449-3.101-6.695 3.101-6.697 3.1 6.697-3.1 6.695Z" />
    </Svg>
  );
}
