import React from 'react';
import styled from "styled-components";

import { useSelector,useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { db } from './firebase';
import { collection, getDoc, getDocs, addDoc } from 'firebase/firestore';
import { loadDicFB } from './redux/modules/dic';

const Dictionary = (props) => {
    const my_lists = useSelector((state) => state.dic.list);
    console.log(my_lists);
    const history = useHistory();
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(loadDicFB());
        }, []);

    return ( 
    <Container>
      <Title>MY DICTIONARY</Title>
    <ListStyle>
        {my_lists.map((list, index) => {
        return (
        <ItemStyle className="list_item"
        key={index}>
        <span>단어</span>    
        <p>{list.word}</p>
        <br/>
        <span>설명</span>
        <p>{list.explanation}</p>
        <br/>
        <span>예시</span>
        <p>{list.example}</p>
        </ItemStyle>
        );
        })}
    </ListStyle>
    <button onClick={() => {
        history.push("/add");
    }}>추가하기</button>
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

const Title = styled.h1`
    color: orange;
    text-align: center;
    `;

const ListStyle = styled.div`
display: flex;
flex-direction: column;
height: 50vh;
overflow-x: hidden;
overflow-y: auto;
max-height: 50vh;
`;

const ItemStyle = styled.div`
padding: 16px;
margin: 8px;
background-color: aliceblue;
`;
export default Dictionary;