import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiGooglecloudcomposerHex = "4285F4";
export const SiGooglecloudcomposerTitle = "Google Cloud Composer";
export const SiGooglecloudcomposerSlug = "googlecloudcomposer";

export function SiGooglecloudcomposer({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiGooglecloudcomposerHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiGooglecloudcomposerTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M9.636 4.752h-6.42V0h17.556v4.728h-6.36v6.396H9.636V4.752zm-6.42 1.692h4.74v6.36h6.408V24H9.636v-6.42h-6.42V6.444zm12.84-.012h4.728V24h-4.728V6.432zM7.92 24H3.216v-4.728H7.92V24z" />
    </Svg>
  );
}
