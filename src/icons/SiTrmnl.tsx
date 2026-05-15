import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiTrmnlHex = "F8654B";
export const SiTrmnlTitle = "TRMNL";
export const SiTrmnlSlug = "trmnl";

export function SiTrmnl({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiTrmnlHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiTrmnlTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m6.024.913 6.661 2.498-1.237 3.299-6.661-2.498ZM16.705.097l2.2 6.766-3.35 1.09-2.2-6.766zM24 7.942l-3.917 5.939-2.941-1.94L21.06 6Zm-1.583 10.593-7.086.64-.317-3.509 7.086-.64zm-9.271 5.367L8.228 18.76l2.546-2.436 4.918 5.141zm-9.976-3.9.953-7.05 3.491.472-.953 7.05zM0 9.768l6.107-3.65L7.915 9.14l-6.107 3.65Z" />
    </Svg>
  );
}
