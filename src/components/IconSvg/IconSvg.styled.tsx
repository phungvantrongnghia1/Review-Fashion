import styled from "styled-components";

export const IconSvgContainer = styled.svg<{
  width: string;
  height: string;
  color: string;
  hoverColor: string;
  padding: string;
  position: string;
  opacity: number;
  pointer: string;
  backgroundColor: string;
  zIndex: number;
  rotate: number;
  margin: string;
}>`
  position: ${(props) => props.position};
  opacity: ${(props) => props.opacity};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  fill: ${(props) => props.color};
  cursor: ${(props) => props.pointer};
  background-color: ${(props) => props.backgroundColor};
  z-index: ${(props) => props.zIndex};
  &:hover {
    fill: ${(props) => props.hoverColor};
  }
  transform: rotate(${(props) => props.rotate}deg);
  margin: ${(props) => props.margin};
  viewbox: "0 0 16 16";
`;

export default {
  IconSvgContainer,
};
