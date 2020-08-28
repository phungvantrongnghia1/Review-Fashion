import React from "react";
import Header from "../Header/Header";
import sc from "./PaylayoutDefaul.styled";
export default  function LayoutDefault({children}: React.Props<any>){
    return (
        <>
            <Header/>
            <sc.Container className="container">
            {children}
            </sc.Container>
        </>
    )
}