import React from "react";
import {Navbar, Form} from "react-bootstrap";
import logo from "../../assets/icon/128x128.png"
import sc from "./Header.styled";
import { IconSvg } from "../IconSvg/IconSvg";
import { etWhite, etGray } from "../../shared/colors";
import {Button} from "react-bootstrap";
export default function Header(props){
    return(
        <>
  <Navbar bg="dark" variant="dark" className="justify-content-between px-5">
    <Navbar.Brand href="#home">
      <img
        alt="logo"
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      Hallo
    </Navbar.Brand>
    <sc.ContainerNavRight>
    <sc.SearchContainer className="mr-3 my-2">
    <sc.Search/>
    <IconSvg
          pointer={true}
          icon="search"
          color={etGray}
          hoverColor={etGray}
          padding="5px"
          width="30px"
          height="30px"
        />
    </sc.SearchContainer>
        <sc.ButtonLogin ><IconSvg
          pointer={true}
          icon="sign-in"
          color={etWhite}
          hoverColor={etWhite}
         
        /> Login</sc.ButtonLogin>
    </sc.ContainerNavRight>
  </Navbar>
</>
    )
}