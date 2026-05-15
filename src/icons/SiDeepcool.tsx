import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiDeepcoolHex = "068584";
export const SiDeepcoolTitle = "DeepCool";
export const SiDeepcoolSlug = "deepcool";

export function SiDeepcool({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiDeepcoolHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiDeepcoolTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12 12v3.046H3.046V6h6V0H12v9.046H6.092V12H12Zm8.954 3.046V18h-5.908v6H12v-8.954h8.954Z" />
    </Svg>
  );
}
