import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiInteractjsHex = "2599ED";
export const SiInteractjsTitle = "InteractJS";
export const SiInteractjsSlug = "interactjs";

export function SiInteractjs({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiInteractjsHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiInteractjsTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12.382.01C12.255.006 12.128 0 12 0A11.999 11.999 0 0 0 1.804 18.327l9.911-17.17zm7.097 19.686L11.201 5.121 2.788 19.689l.007.007h16.684zm.184 1.538H4.337a11.998 11.998 0 0 0 15.326 0zm2.917-3.568A11.999 11.999 0 0 0 12.382.01l.667 1.148zM12.383.009l-.001.001h.001V.009z" />
    </Svg>
  );
}
