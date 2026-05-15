import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiPaperswithcodeHex = "21CBCE";
export const SiPaperswithcodeTitle = "Papers With Code";
export const SiPaperswithcodeSlug = "paperswithcode";

export function SiPaperswithcode({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiPaperswithcodeHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiPaperswithcodeTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M0 2v20h4.4v-2.4h-2V4.4h2V2H0Zm19.6 0v2.4h2v15.2h-2V22H24V2h-4.4Zm-16 3.6v12.8H6V5.6H3.6Zm7.2 0v12.8h2.4V5.6h-2.4Zm7.2 0v12.8h2.4V5.6H18Zm-10.8.8v11.2h2.4V6.4H7.2Zm7.2 0v11.2h2.4V6.4h-2.4Z" />
    </Svg>
  );
}
