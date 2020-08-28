import * as React from 'react';
import sc from "./SlideHomePage.styled";
import Slider from "../Slider/Slider";
interface IProps {

}
const Index = (props) =>{
    return (
       <>
        <sc.Container>
            <sc.Silder><Slider/></sc.Silder>    
            <sc.Silder>1</sc.Silder>
            <sc.Silder>1</sc.Silder>
            <sc.Silder>1</sc.Silder>

        </sc.Container>
       </>
    )
}
export default Index;
