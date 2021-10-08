import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const { bold, color, size, children, margin, cursor, _onClick } = props;

  const styles = {
    bold: bold,
    cursor: cursor,
    color: color,
    size: size,
    margin: margin,
  };
  return (
    <P onClick={_onClick} {...styles}>
      {children}
    </P>
  );
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: "#222831",
  size: "14px",
  margin: false,
  cursor: false,
  _onClick: () => {},
};

const P = styled.div`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  cursor: pointer;
  font-family: "Gowun Batang", serif;
`;
export default Text;
