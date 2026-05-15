import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiWpengineHex = "0ECAD4";
export const SiWpengineTitle = "WP Engine";
export const SiWpengineSlug = "wpengine";

export function SiWpengine({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiWpengineHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiWpengineTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M8.145 0v5.867L9.99 7.71h4.022l1.845-1.844V0zm8.145 0v5.867l1.845 1.844h5.864V.001zM1.845 0L0 1.845v5.866h7.712V0zM0 8.146v7.71h5.866l1.845-1.844V8.145zm18.133 0L16.29 9.989v4.022l1.845 1.845H24V8.145zm-6.147 2.75a1.105 1.105 0 00.014 2.21A1.105 1.105 0 0013.105 12a1.105 1.105 0 00-1.118-1.104zM0 16.29v7.71h5.866l1.845-1.842v-4.023l-1.845-1.845zm9.988 0l-1.843 1.845V24h7.71v-5.866L14.01 16.29zm6.3 0V24H24v-5.865l-1.842-1.845z" />
    </Svg>
  );
}
