import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiAstralHex = "261230";
export const SiAstralTitle = "Astral";
export const SiAstralSlug = "astral";

export function SiAstral({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiAstralHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiAstralTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M1.44 0C.6422 0 0 .6422 0 1.44v21.12C0 23.3578.6422 24 1.44 24h21.12c.7978 0 1.44-.6422 1.44-1.44V1.44C24 .6422 23.3578 0 22.56 0Zm4.7998 4.8h11.5199c.7953 0 1.44.6447 1.44 1.44V19.2h-6.624v-4.32h-1.152v4.32H4.8V6.24c0-.7953.6446-1.44 1.4398-1.44m4.032 5.472v1.152h3.456v-1.152z" />
    </Svg>
  );
}
