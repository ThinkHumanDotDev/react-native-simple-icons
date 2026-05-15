import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiRasaHex = "5A17EE";
export const SiRasaTitle = "Rasa";
export const SiRasaSlug = "rasa";

export function SiRasa({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiRasaHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiRasaTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="m20.848 15.852-3.882-2.034H.97V7.515h22.06v6.303h-2.182v2.034ZM0 6.545v8.243h16.727l5.091 2.667v-2.667H24V6.545H0Zm1.94 1.94h4.12v2.18l-1.33.517 1.362 1.666H4.84l-1.06-1.296-.87.339v.957h-.97V8.485ZM8 12.848h-.97V8.485h4.364v4.363h-.97v-1.454H8v1.454Zm4.364-1.696V8.485h4.363v.97h-3.394v.727h3.394v2.666h-4.363v-.97h3.394v-.726h-3.394Zm5.333-.243V8.485h4.364v4.363h-.97v-1.454h-2.424v1.454h-.97V10.91Zm-14.788-.06 2.182-.848v-.546H2.909v1.395ZM8 9.456v.97h2.424v-.97H8Zm13.09.97v-.97h-2.423v.97h2.424Z" />
    </Svg>
  );
}
