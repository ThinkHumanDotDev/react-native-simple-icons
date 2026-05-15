import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiSemanticwebHex = "005A9C";
export const SiSemanticwebTitle = "Semantic Web";
export const SiSemanticwebSlug = "semanticweb";

export function SiSemanticweb({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiSemanticwebHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiSemanticwebTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M21.602 0s-1.524 5.809-8.516 2.658c-.776-.35-.954-.444-.982-.469L2.074 6.301l10.043 4.896s.776-.326 2.026-.933C20.273 7.287 21.602 0 21.602 0zM1.59 8.486v10.448L10.947 24V13.242L1.59 8.486zm20.82 0l-9.357 4.756V24l9.357-5.066V8.486Z" />
    </Svg>
  );
}
