import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiNunjucksHex = "1C4913";
export const SiNunjucksTitle = "Nunjucks";
export const SiNunjucksSlug = "nunjucks";

export function SiNunjucks({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiNunjucksHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiNunjucksTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 12v12h24V0H0v12zm8.2-1.9V3h3v17.3h-3c-.7-2.5-1.4-5-2.2-7.5v7.5H3V3h3c.8 2.3 1.5 4.7 2.2 7.1zM20.9 7v11.6c0 .2-.1.7-.5 1.1-.4.4-.8.5-.9.6h-5.1c-.2 0-.7-.1-1-.5-.4-.4-.5-.9-.6-1.2v-3.8c1-.2 2-.5 3-.7v3.1h2.1V7h3zM0 24" />
    </Svg>
  );
}
