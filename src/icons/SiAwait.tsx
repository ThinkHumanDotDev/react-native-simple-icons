import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiAwaitHex = "7858F5";
export const SiAwaitTitle = "Await";
export const SiAwaitSlug = "await";

export function SiAwait({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiAwaitHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiAwaitTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12 0c5.523 0 10 4.477 10 10v9a3.125 3.125 0 0 1-4.694 2.703A3.126 3.126 0 0 1 12 23a3.126 3.126 0 0 1-5.306-1.297A3.125 3.125 0 0 1 2 19v-9C2 4.477 6.477 0 12 0m-1.25 10.625a.625.625 0 0 0-.625.625 1.875 1.875 0 0 0 3.75 0 .625.625 0 0 0-.625-.625zm-1.875-5c-.69 0-1.25.56-1.25 1.25v1.25a1.25 1.25 0 0 0 2.5 0v-1.25c0-.69-.56-1.25-1.25-1.25m6.25 0c-.69 0-1.25.56-1.25 1.25v1.25a1.25 1.25 0 0 0 2.5 0v-1.25c0-.69-.56-1.25-1.25-1.25" />
    </Svg>
  );
}
