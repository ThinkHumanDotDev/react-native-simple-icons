import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiLocustHex = "B8EE4B";
export const SiLocustTitle = "Locust";
export const SiLocustSlug = "locust";

export function SiLocust({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiLocustHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiLocustTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m21.425 6.348.725.731-1.901 1.916.501.502 2.52-2.519.73.73-2.519 2.52v2.887l-1.65 1.65-1.875-1.9v1.064l3.674 3.723h-2.722l-6.514-6.514 5.684-2.612h1.187Zm-2.74 11.683h-3.924l-7.799-7.799-2.038 7.799H2.012L4.948 6.783l.157-.076 1.517-.738ZM2.137 15.85l-.47 1.802H0v-.82Zm4.304-1.977 2.449-1.126 3.605 3.605-3.008 1.3H5.454Z" />
    </Svg>
  );
}
