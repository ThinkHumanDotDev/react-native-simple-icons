import * as React from "react";
import { Path, Svg } from "react-native-svg";
import type { IconProps } from "../types.js";

export const SiSonarqubeserverHex = "126ED3";
export const SiSonarqubeserverTitle = "SonarQube Server";
export const SiSonarqubeserverSlug = "sonarqubeserver";

export function SiSonarqubeserver({
  size = 24,
  color = "black",
  title,
  ...props
}: IconProps): React.ReactElement {
  const resolvedColor = color === "default" ? `#${SiSonarqubeserverHex}` : color;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      accessibilityLabel={title ?? SiSonarqubeserverTitle}
      {...props}
    >
      <Path fill={resolvedColor} d="M12 0a.774.774 0 0 0-.775.775c0 .43.346.776.775.776 5.762 0 10.45 4.687 10.45 10.449 0 .43.345.775.775.775A.774.774 0 0 0 24 12c0-6.616-5.384-12-12-12zm0 3.932a.774.774 0 0 0-.775.775c0 .43.346.775.775.775A6.524 6.524 0 0 1 18.518 12c0 .43.346.775.775.775.43 0 .775-.346.775-.775 0-4.448-3.62-8.068-8.068-8.068zm0 3.925a.774.774 0 0 0-.775.776c0 .43.346.775.775.775A2.597 2.597 0 0 1 14.592 12c0 .43.346.775.775.775.43 0 .776-.346.776-.775A4.145 4.145 0 0 0 12 7.857zM.775 11.225A.774.774 0 0 0 0 12c0 6.616 5.384 12 12 12 .43 0 .775-.346.775-.775a.774.774 0 0 0-.775-.776C6.238 22.45 1.55 17.762 1.55 12a.774.774 0 0 0-.775-.775zm3.932 0a.774.774 0 0 0-.775.775c0 4.448 3.62 8.068 8.068 8.068.43 0 .775-.346.775-.775a.774.774 0 0 0-.775-.775A6.524 6.524 0 0 1 5.482 12a.774.774 0 0 0-.775-.775zm3.926 0a.774.774 0 0 0-.776.775A4.145 4.145 0 0 0 12 16.143c.43 0 .775-.347.775-.776a.774.774 0 0 0-.775-.775A2.597 2.597 0 0 1 9.408 12a.774.774 0 0 0-.775-.775z" />
    </Svg>
  );
}
