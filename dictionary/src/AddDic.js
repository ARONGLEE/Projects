import React from 'react';
import styled from "styled-components";

import {useDispatch,} from "react-redux";
import { addDicFB, isLoaded } from './redux/modules/dic';
import { useHistory } from "react-router-dom";

const AddDic = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const word = React.useRef(null);
    const explanation = React.useRef(null);
    const example = React.useRef(null);

    const addDicList = () => {
        dispatch(isLoaded(false));
        //dispatch(createDic({word: word.current.value, explanation: explanation.current.value, example: example.current.value}));
        dispatch(addDicFB({word: word.current.value, explanation: explanation.current.value, example: example.current.value}));
        history.push("/");
    }

    return ( 
    <Container>
        <Title>단어 추가하기</Title>
    <ListStyle>
    <ItemStyle className="list_item">
        <SubtitleStyle>단어</SubtitleStyle>
        <p style={{marginBottom: "0px"}}><InputStyle type="text" ref={word} /></p>
    </ItemStyle>
    <ItemStyle className="list_item">
        <SubtitleStyle>설명</SubtitleStyle>
        <p style={{marginBottom: "0px"}}><InputStyle type="text" ref={explanation} /></p>
    </ItemStyle>
    <ItemStyle className="list_item">
        <SubtitleStyle>예시</SubtitleStyle>
        <p style={{marginBottom: "0px"}}><InputStyle type="text" ref={example} /></p>
    </ItemStyle>    
        <ButtonStyle onClick={addDicList}>추가하기</ButtonStyle>
    </ListStyle>
    </Container>
    )
}

const Container = styled.div`
    max-width: 350px;
    min-height: 80vh;
    background-color: #ffd590;
    padding: 16px;
    margin: 20px auto;
    border-radius: 5px;
    border: 1px solid #ddd;
    `;

const Title = styled.h1`
    color: #ff8100;
    text-align: center;
    `;

const ListStyle = styled.div`
display: flex;
flex-direction: column;
height: 75vh;
overflow-x: hidden;
overflow-y: auto;
max-height: 80vh;
`;

const ItemStyle = styled.div`
padding: 16px;
margin: 8px;
background-color: #fff;
`;

const SubtitleStyle = styled.span`
    font-size: 12px;
    text-decoration: underline;
`;

const InputStyle = styled.input`
    width: 30vw;
    height: 3vh;
`;

const ButtonStyle = styled.button`
    width: 35vw;
    margin: 50px auto;
    padding: 5px;
    font-size: 20px;
    color: #fff;
    background-color: #f26725;
    border: none;
`; 
export default AddDic;