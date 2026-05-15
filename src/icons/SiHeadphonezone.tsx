import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiHeadphonezoneHex = "3C07FF";
export const SiHeadphonezoneTitle = "Headphone Zone";
export const SiHeadphonezoneSlug = "headphonezone";

export function SiHeadphonezone({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiHeadphonezoneHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiHeadphonezoneTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M17.63 4.702 17.96 0 9.086 2.484c-.463 1.754-.694 4.139.133 6.655.232-.067.463-.1.695-.133a4.724 4.724 0 0 1 5.133 4.305 4.724 4.724 0 0 1-4.305 5.133 4.724 4.724 0 0 1-5.132-4.305 4.618 4.618 0 0 1 1.159-3.543c-.86-1.325-1.987-3.609-1.954-6.49C1.107 6.623-.847 11.258.378 15.86c1.49 5.828 7.45 9.305 13.245 7.782 4.603-1.192 7.748-5.198 8.113-9.702l2.251-1.622-6.358-7.616Z" />
    </Svg>
  );
}
