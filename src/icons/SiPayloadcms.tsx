import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiPayloadcmsHex = "000000";
export const SiPayloadcmsTitle = "Payload CMS";
export const SiPayloadcmsSlug = "payloadcms";

export function SiPayloadcms({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiPayloadcmsHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiPayloadcmsTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M11.068 0 22.08 6.625v12.573L13.787 24V11.427L2.769 4.808 11.068 0ZM1.92 18.302l8.31-4.812v9.812l-8.31-5Z" />
    </Svg>
  );
}
