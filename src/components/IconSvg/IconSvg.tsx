import { observer } from "mobx-react-lite";
import React from "react";

import etIcon from "../../assets/et-icons.svg";
import { etBlack } from "../../shared/colors";
import sc from "./IconSvg.styled";

interface IProps {
  icon: string;
  position?: string;
  pointer?: boolean;
  opacity?: number;
  width?: string;
  height?: string;
  padding?: string;
  color?: string;
  hoverColor?: string;
  backgroundColor?: string;
  zIndex?: number;
  viewBox?: string;
  rotate?: number;
  margin?: string;
  onClick?(): void;
}

export const IconSvg = observer((props: IProps) => {
  const {
    position = "relative",
    opacity = 1,
    width = "2rem",
    height = "1.65rem",
    padding = "0.25rem",
    color = etBlack,
    pointer = false,
    backgroundColor = "transparent",
    zIndex = 0,
    viewBox = "0 0 16 16",
    rotate = 0,
    margin = "0",
    onClick = () => {},
  } = props;

  return (
    <sc.IconSvgContainer
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      position={position}
      opacity={opacity}
      width={width}
      height={height}
      padding={padding}
      color={color}
      zIndex={zIndex}
      pointer={pointer ? "pointer" : "default"}
      backgroundColor={backgroundColor}
      hoverColor={props.hoverColor ? props.hoverColor : color}
      viewBox={viewBox}
      rotate={rotate}
      margin={margin}
      onClick={() => onClick()}
    >
      <use xlinkHref={`${etIcon}#${props.icon}`} />
    </sc.IconSvgContainer>
  );
});
