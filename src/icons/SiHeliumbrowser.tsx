import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiHeliumbrowserHex = "3450D1";
export const SiHeliumbrowserTitle = "Helium Browser";
export const SiHeliumbrowserSlug = "heliumbrowser";

export function SiHeliumbrowser({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiHeliumbrowserHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiHeliumbrowserTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M14.3081 22.2984 12 24l-2.3081-1.7016 1.0489-8.1189-6.5174 4.9661L1.5938 18l.321-2.8467L9.4808 12l-7.566-3.1533L1.5938 6l2.6296-1.1456 6.5174 4.9661-1.049-8.119L12 0l2.3081 1.7016-1.0488 8.1189 6.5173-4.9661L22.4062 6l-.321 2.8467L14.5192 12l7.566 3.1533.321 2.8467-2.6296 1.1456-6.5173-4.9661z" />
    </Svg>
  );
}
