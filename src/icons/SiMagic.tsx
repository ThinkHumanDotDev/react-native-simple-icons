import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiMagicHex = "6851FF";
export const SiMagicTitle = "Magic";
export const SiMagicSlug = "magic";

export function SiMagic({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiMagicHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiMagicTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12 0a29.658 29.658 0 0 1-3.611 3.53A27.326 27.326 0 0 1 9.729 12c0 2.948-.47 5.792-1.34 8.47A29.658 29.658 0 0 1 12 24a29.658 29.658 0 0 1 3.611-3.53 27.326 27.326 0 0 1-1.34-8.47c0-2.948.47-5.792 1.34-8.47A29.658 29.658 0 0 1 12 0Zm6.109 5.381A27.362 27.362 0 0 0 17.3 12c0 2.278.28 4.494.809 6.619a30.696 30.696 0 0 1 4.391-2.424A13.662 13.662 0 0 1 21.843 12c0-1.46.23-2.868.657-4.195a30.698 30.698 0 0 1-4.391-2.424Zm-12.218 0A30.7 30.7 0 0 1 1.5 7.805c.427 1.327.657 2.736.657 4.195 0 1.46-.23 2.868-.657 4.195a30.696 30.696 0 0 1 4.391 2.424C6.42 16.494 6.7 14.278 6.7 12c0-2.278-.28-4.494-.809-6.619z" />
    </Svg>
  );
}
