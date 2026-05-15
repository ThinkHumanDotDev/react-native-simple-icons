import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiArkecosystemHex = "C9292C";
export const SiArkecosystemTitle = "ARK Ecosystem";
export const SiArkecosystemSlug = "arkecosystem";

export function SiArkecosystem({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiArkecosystemHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiArkecosystemTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M1.8 0C.806 0 0 .805 0 1.8v20.4c0 .995.805 1.8 1.8 1.8h20.4c.995 0 1.8-.805 1.8-1.8V1.8c0-.995-.805-1.8-1.8-1.8H1.8zm10.223 4.39l9.29 15.098-9.29-9.82-9.351 9.82 9.351-15.097zm0 7.583l1.633 1.691h-3.285l1.652-1.691zM9.31 14.762h5.41l1.496 1.574H7.813l1.496-1.574z" />
    </Svg>
  );
}
