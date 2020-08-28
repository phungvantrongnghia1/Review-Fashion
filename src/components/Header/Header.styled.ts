import { etWhite, etBlueLight } from "./../../shared/colors";
import styled from "styled-components";

namespace sc {
    export const SearchContainer = styled.div`
        display:flex;
        background-color:${etWhite};
        border-radius:15px;
    `
    export const Search = styled.input`
        background-color:transparent;
        margin:0;
        padding-left:15px;
        border:none;
        &:focus{
            outline:none;
        }
    `
    export const ContainerNavRight = styled.div`
    display:flex;
    `
    export const ButtonLogin = styled.button`
    background-color:${etBlueLight};
    border-radius:15px;
    border:none;
    color:${etWhite};
    padding:0 20px;
    `
}
export default sc;