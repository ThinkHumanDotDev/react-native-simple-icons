import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiLitiengineHex = "00A5BC";
export const SiLitiengineTitle = "LITIENGINE";
export const SiLitiengineSlug = "litiengine";

export function SiLitiengine({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiLitiengineHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiLitiengineTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m0 12.018 2.09 2.088L11.987 24l2.146-2.146-9.897-9.893 6.586-6.582-2.09-2.089Zm13.211 6.624 2.08 2.078 5.425-5.422-2.08-2.078zM9.85 2.151l6.606 6.602L9.9 15.306l2.134 2.133 6.555-6.553 3.258 3.257L24 11.993 12 0Zm-3.276 9.853 2.035 2.034 5.453-5.45-2.035-2.035z" />
    </Svg>
  );
}
