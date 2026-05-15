import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiGooglesummerofcodeHex = "F9AB00";
export const SiGooglesummerofcodeTitle = "Google Summer of Code";
export const SiGooglesummerofcodeSlug = "googlesummerofcode";

export function SiGooglesummerofcode({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiGooglesummerofcodeHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiGooglesummerofcodeTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m11.995 0-.954.954L9.24 2.758l-.755.725h-4.97v5.001L0 12.004l2.758 2.76.755.752v4.973h4.971L11.995 24l3.523-3.511h4.961v-4.973L24 12.005l-3.52-3.521v-5h-5.01zm0 5.068a6.928 6.928 0 0 1 6.94 6.918v.019a6.937 6.937 0 1 1-6.94-6.937Zm.436 3.457-1.709 6.339.94.253 1.709-6.339zm1.97 1.047-.715.649 1.431 1.594-1.431 1.593.725.649 2.013-2.242zm-4.8.01-2.014 2.242L9.6 14.075l.725-.648-1.431-1.594 1.431-1.603z" />
    </Svg>
  );
}
