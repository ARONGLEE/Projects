import React from 'react';
import styled from "styled-components";

import {useDispatch,} from "react-redux";
import { addDicFB, createDic } from './redux/modules/dic';
import { useHistory } from "react-router-dom";

const AddDic = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const word = React.useRef(null);
    const explanation = React.useRef(null);
    const example = React.useRef(null);

    const addDicList = () => {
        //dispatch(createDic({word: word.current.value, explanation: explanation.current.value, example: example.current.value}));
        dispatch(addDicFB({word: word.current.value, explanation: explanation.current.value, example: example.current.value}));
        history.push("/");
    }

    return ( 
    <Container>
        <span>단어</span>
        <input type="text" ref={word} />
        <br/>
        <span>설명</span>
        <input type="text" ref={explanation} />
        <br/>
        <span>예시</span>
        <input type="text" ref={example} />
        <button onClick={addDicList}>추가하기</button>
    </Container>
    )
}

const Container = styled.div`
    max-width: 350px;
    min-height: 80vh;
    background-color: #fff;
    padding: 16px;
    margin: 20px auto;
    border-radius: 5px;
    border: 1px solid #ddd;
    `;

export default AddDic;