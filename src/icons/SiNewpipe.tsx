import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiNewpipeHex = "CD201F";
export const SiNewpipeTitle = "NewPipe";
export const SiNewpipeSlug = "newpipe";

export function SiNewpipe({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiNewpipeHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiNewpipeTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M11.988 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.012 0zm-4.38 4.608s1.512.888 3.672 2.16C13.848 8.28 17.304 10.32 20.16 12a5976.548 5976.548 0 0 0-8.736 5.16v-2.675c1.07-.63 2.467-1.455 4.224-2.485-1.296-.768-2.856-1.703-4.032-2.375l-1.68-.985v9.399l-2.328 1.377z" />
    </Svg>
  );
}
