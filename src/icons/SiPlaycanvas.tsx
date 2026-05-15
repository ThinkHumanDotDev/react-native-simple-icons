import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiPlaycanvasHex = "E05F2C";
export const SiPlaycanvasTitle = "PlayCanvas";
export const SiPlaycanvasSlug = "playcanvas";

export function SiPlaycanvas({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiPlaycanvasHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiPlaycanvasTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M6.115 0l-.002 3.414 5.823 3.41-5.82 3.414-.003 3.412 11.774-6.826zm11.77 10.35L6.113 17.174 17.887 24l-.002-3.414-5.82-3.412 5.822-3.412z" />
    </Svg>
  );
}
