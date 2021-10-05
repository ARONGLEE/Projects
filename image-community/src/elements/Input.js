import React from "react";
import styled from "styled-components";

import { Text, Grid } from "./index";
const Input = (props) => {
  const { label, placeholder, _onChange, type, multiLine, value } = props;

  if (multiLine) {
    return (
      <Grid>
        <Text margin="0px">{label && <Text margin="0px">{label}</Text>}</Text>
        <ElTextarea
          rows={10}
          value={value}
          placeholder={placeholder}
          onChange={_onChange}
        ></ElTextarea>
      </Grid>
    );
  }
  return (
    <React.Fragment>
      <Grid>
        <Text margin="0px">{label && <Text margin="0px">{label}</Text>}</Text>
        <ElInput
          type={type}
          placeholder={placeholder}
          onChange={_onChange}
        ></ElInput>
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  label: false,
  type: "text",
  placeholder: "텍스트를 입력해주세요.",
  //콜백함수
  _onChange: () => {},
  value: "",
  multiLine: false,
};

const ElInput = styled.input`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
`;

const ElTextarea = styled.textarea`
    border: 1px solid #212121;
    width: 100%;
    height: 
    padding: 12px 4px;
    box-sizing: border-box;
`;

export default Input;
