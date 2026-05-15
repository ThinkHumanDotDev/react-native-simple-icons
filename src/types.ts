import type { SvgProps } from "react-native-svg";

export type IconProps = Omit<SvgProps, "color"> & {
  size?: number | string;
  color?: string | "default";
  title?: string;
};
