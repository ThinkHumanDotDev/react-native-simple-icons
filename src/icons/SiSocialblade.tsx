import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiSocialbladeHex = "B3382C";
export const SiSocialbladeTitle = "Social Blade";
export const SiSocialbladeSlug = "socialblade";

export function SiSocialblade({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiSocialbladeHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiSocialbladeTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M2.323 16.688H0v1.893h2.323v-1.893ZM5.935 13.591H3.613v4.99h2.322v-4.99ZM9.548 14.796H7.226v3.785h2.322v-3.785ZM13.161 13.935H10.84v4.646h2.322v-4.646ZM16.774 12.043h-2.322v6.538h2.322v-6.538ZM20.387 10.065h-2.323v8.516h2.323v-8.516ZM24 5.42h-2.323v13.16H24V5.42Z" />
    </Svg>
  );
}
