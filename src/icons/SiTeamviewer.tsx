import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiTeamviewerHex = "050A52";
export const SiTeamviewerTitle = "TeamViewer";
export const SiTeamviewerSlug = "teamviewer";

export function SiTeamviewer({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiTeamviewerHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiTeamviewerTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m20.17 11.998-6.225-3.401.685 2.144H9.37l.684-2.145L3.829 12l6.225 3.404-.683-2.147h5.26l-.686 2.147zM20.448 0H3.553A3.553 3.553 0 0 0 .001 3.552v16.895A3.553 3.553 0 0 0 3.553 24h16.895A3.553 3.553 0 0 0 24 20.447V3.552A3.553 3.553 0 0 0 20.448 0zM12 21.646c-5.328 0-9.648-4.32-9.648-9.648 0-5.329 4.32-9.646 9.648-9.646S21.65 6.672 21.65 12s-4.32 9.648-9.649 9.648z" />
    </Svg>
  );
}
