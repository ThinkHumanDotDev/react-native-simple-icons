import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiLiteralHex = "000000";
export const SiLiteralTitle = "Literal";
export const SiLiteralSlug = "literal";

export function SiLiteral({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiLiteralHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiLiteralTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m11.148 5.719.128-1.798 3.234.223-1.52-2.902 1.63-.836L16.176 3.4l1.966-2.75 1.495 1.05-1.916 2.665 3.212.221-.128 1.797-3.167-.217 1.498 2.878-1.628.836-1.578-3.017-1.99 2.771-1.495-1.05L14.36 5.94zm-8.129 9.513L5.197 0l2.569.355-1.817 12.708 5.978.825-.361 2.525zM20.981 21.7 4.328 24l-.36-2.524 16.652-2.3z" />
    </Svg>
  );
}
