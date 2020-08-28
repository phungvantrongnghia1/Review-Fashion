import  React from "react";
import sc from "./LayoutHomePage.styled";
interface IProps {
    renderSlide():void
}
export default function LayoutHomePage(props: IProps){
    return (
        <sc.Container>
            {props.renderSlide()}
        </sc.Container>
    )
}