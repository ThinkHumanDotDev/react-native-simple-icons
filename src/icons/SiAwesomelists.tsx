import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiAwesomelistsHex = "FC60A8";
export const SiAwesomelistsTitle = "Awesome Lists";
export const SiAwesomelistsSlug = "awesomelists";

export function SiAwesomelists({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiAwesomelistsHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiAwesomelistsTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M24 11.438l-6.154-5.645-.865.944 5.128 4.7H1.895l5.128-4.705-.865-.943-6.154 5.649H0v3.72c0 1.683 1.62 3.053 3.61 3.053h3.795c1.99 0 3.61-1.37 3.61-3.051v-2.446h1.97v2.446c0 1.68 1.62 3.051 3.61 3.051h3.794c1.99 0 3.61-1.37 3.61-3.051v-3.721z" />
    </Svg>
  );
}
