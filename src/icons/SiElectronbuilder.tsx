import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiElectronbuilderHex = "000000";
export const SiElectronbuilderTitle = "electron-builder";
export const SiElectronbuilderSlug = "electronbuilder";

export function SiElectronbuilder({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiElectronbuilderHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiElectronbuilderTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12 7.01a3.506 3.506 0 003.506-3.505A3.506 3.506 0 0012 0a3.506 3.506 0 00-3.506 3.506A3.506 3.506 0 0012 7.01m0 4.137C9.243 8.588 5.574 7.01 1.484 7.01v12.852C5.574 19.863 9.243 21.44 12 24c2.757-2.56 6.426-4.137 10.516-4.137V7.01c-4.09 0-7.759 1.578-10.516 4.137z" />
    </Svg>
  );
}
