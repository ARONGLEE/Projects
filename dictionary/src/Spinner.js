import React from "react";
import styled from "styled-components";

const Spinner = (props) => {
    return (
        <Outter>
           <i style={{color: "white", fontSize: "100px" }} class="far fa-smile"></i>
        </Outter>
        
        )
}

const Outter = styled.div`
    background : #c44800;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export default Spinner;