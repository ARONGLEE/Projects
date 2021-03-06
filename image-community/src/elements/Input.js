import React from "react";
import styled from "styled-components";

import { Text, Grid } from "./index";
const Input = (props) => {
  const {
    label,
    placeholder,
    _onChange,
    type,
    multiLine,
    value,
    is_submit,
    onSubmit,
  } = props;

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
        {label && <Text margin="0px">{label}</Text>}
        {is_submit ? (
          <ElInput
            type={type}
            placeholder={placeholder}
            onChange={_onChange}
            value={value}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                onSubmit(e);
              }
            }}
          />
        ) : (
          <ElInput type={type} placeholder={placeholder} onChange={_onChange} />
        )}
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
  is_submit: false,
  onSubmit: () => {},
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
