import styled from "styled-components";

namespace sc {
    export const Container = styled.div`
        display:grid;
        grid-template-columns: repeat(auto-fill, 328px);
        grid-auto-rows: 248px;
        grid-gap: 24px;
        justify-content: center;
    `
    export const Silder = styled.div`
        background-color:green;
        &:first-child{
            grid-row-start:1;
            grid-row-end:3;
        }
        &:nth-child(3){
            grid-row-start:1;
            grid-row-end:3;
            grid-column-start:3;
        }
    `
}
export default sc;