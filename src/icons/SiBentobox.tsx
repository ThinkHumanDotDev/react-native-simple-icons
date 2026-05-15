import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiBentoboxHex = "F15541";
export const SiBentoboxTitle = "BentoBox";
export const SiBentoboxSlug = "bentobox";

export function SiBentobox({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiBentoboxHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiBentoboxTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m7.406 3.821 2.723-2.725a3.74 3.74 0 0 1 5.29 0l.078.078a3.74 3.74 0 0 1 0 5.29l-2.723 2.723-5.368-5.366Zm7.407 7.407 2.723-2.723a3.74 3.74 0 0 1 5.29 0l.078.078a3.74 3.74 0 0 1 0 5.29l-2.725 2.723-5.369-5.368h.003ZM0 11.228l2.723-2.723a3.74 3.74 0 0 1 5.29 0l.079.078a3.742 3.742 0 0 1 0 5.29l-2.724 2.723L0 11.228Zm7.406 7.406 2.723-2.723a3.74 3.74 0 0 1 5.29 0l.078.078a3.74 3.74 0 0 1 0 5.29L12.774 24l-5.368-5.366Z" />
    </Svg>
  );
}
