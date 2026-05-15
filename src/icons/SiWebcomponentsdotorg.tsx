import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiWebcomponentsdotorgHex = "29ABE2";
export const SiWebcomponentsdotorgTitle = "webcomponents.org";
export const SiWebcomponentsdotorgSlug = "webcomponentsdotorg";

export function SiWebcomponentsdotorg({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiWebcomponentsdotorgHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiWebcomponentsdotorgTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M11.731 2.225l-.01.016H5.618L0 11.979l5.618 9.736h12.8l.04.06 2.134-3.735.518-.893h-.008l.008-.014-.626-.75h.895l.006-.01.008.01L24 11.994l-2.607-4.39-.003.005-.011-.02h-.945l.63-.763-2.606-4.57-.006.01-.024-.04H11.73zM9.107 6.824h6.19l-.53.764h-.023l2.398 4.015h.875l-.277.328.357.435h-.956l-2.398 4.015h.027l.523.764H9.074l-2.99-5.168 3.022-5.155z" />
    </Svg>
  );
}
