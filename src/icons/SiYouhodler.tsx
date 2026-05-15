import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiYouhodlerHex = "546DF9";
export const SiYouhodlerTitle = "YouHodler";
export const SiYouhodlerSlug = "youhodler";

export function SiYouhodler({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiYouhodlerHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiYouhodlerTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M4.727,15.273L1.091,13.091L1.091,4.364L8.364,0L12,2.182L15.636,0L22.909,4.364L22.909,13.091L19.273,15.273L19.273,19.636L12,24L4.727,19.636L4.727,15.273ZM12,19.636L14.422,18.182L14.422,12.364L19.273,9.455L19.273,6.545L16.85,5.092L12,8L7.15,5.092L4.727,6.545L4.727,9.455L9.578,12.364L9.578,18.182L12,19.636Z" />
    </Svg>
  );
}
