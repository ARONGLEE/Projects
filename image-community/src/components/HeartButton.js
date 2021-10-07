import React from "react";
import styled from "styled-components";

import heart_red from "../shared/heart_red.png";
import e_heart from "../shared/e_heart.png";

const HeartButton = (props) => {
  return (
    <React.Fragment>
      <Heart icon_url={heart_red}></Heart>
    </React.Fragment>
  );
};

const Heart = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  //     position: fixed;
  //     right: 24%;
  background: url(${(props) => props.icon_url});
  background-size: cover;
  cursor: pointer;
  margin: auto;
`;
export default HeartButton;
