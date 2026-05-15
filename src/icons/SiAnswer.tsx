import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiAnswerHex = "0033FF";
export const SiAnswerTitle = "Answer";
export const SiAnswerSlug = "answer";

export function SiAnswer({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiAnswerHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiAnswerTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M5.486 0c-1.92 0-2.881 0-3.615.373A3.428 3.428 0 0 0 .373 1.871C-.001 2.605 0 3.566 0 5.486v9.6c0 1.92 0 2.88.373 3.613.329.645.853 1.17 1.498 1.498.734.374 1.695.375 3.615.375h11.657V24l.793-.396c2.201-1.101 3.3-1.652 4.105-2.473a6.852 6.852 0 0 0 1.584-2.56C24 17.483 24 16.251 24 13.79V5.486c0-1.92 0-2.881-.373-3.615A3.428 3.428 0 0 0 22.129.373C21.395-.001 20.434 0 18.514 0H5.486zm1.371 10.285h10.286a5.142 5.142 0 0 1-10.286.024v-.024z" />
    </Svg>
  );
}
