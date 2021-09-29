import React from 'react';
import styled from "styled-components";

import { useSelector,useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadDicFB, updateDicFB, deleteDic } from './redux/modules/dic';
// import { db } from '../../firebase';
// import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

const Dictionary = (props) => {
    const my_lists = useSelector((state) => state.dic.list);
    // const dic_id = useSelector((state) => state.dic.list.id);
    console.log(my_lists);
    const history = useHistory();
    const dispatch = useDispatch();

    React.useEffect(() => {
        //console.log('타요타요');
        if (my_lists.length === 0) {
            dispatch(loadDicFB());
        }
        
        // const docRef = doc(db, "dic", "63vA9CzTgzDy2SY35iM7");
        // deleteDoc(docRef);
      }, []);
    
  
    return ( 
    <Container>
      <Title>MY DICTIONARY</Title>
    <Cards>
        {my_lists.map((list, index) => {
        return (
        <ItemStyle className="list_item"
        key={index}>
        <SubtitleStyle>단어</SubtitleStyle>    
        <TextStyle>{list.word}</TextStyle>
        <SubtitleStyle>설명</SubtitleStyle>
        <TextStyle>{list.explanation}</TextStyle>
        <SubtitleStyle>예시</SubtitleStyle>
        <TextStyle style={{color: "#117edd"}}>{list.example}</TextStyle>
        {/* <button onClick={()=> {
            console.log("삭제클릭");
            dispatch(deleteDic(dic_id))
            history.push("/");
        }}>X</button>
        <button onClick= {()=>{
            console.log("수정클릭");
            //dispatch(updateDic(dic_id));
            dispatch(updateDicFB(dic_id));
        }}>수정하기</button> */}
        </ItemStyle>
        );
        })}
    </Cards>
    {/* <i style={{
        fontSize: "100px", 
        color: "orange",
        position: "absolute",
        bottom: "12.5%",
        right: "35%", 
    }} class="fas fa-plus-circle" onClick={() => {
        history.push("/add");
    }}></i> */}
    <ButtonStyle onClick={() => {
        history.push("/add");
    }}>추가하기</ButtonStyle>
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

const Cards = styled.div`
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

const TextStyle = styled.p`
    margin-top: 5px;
`;


const ButtonStyle = styled.button`
    width: 35vw;
    margin: 20px auto;
    padding: 5px;
    font-size: 20px;
    color: #fff;
    background-color: #f26725;
    border: none;
`; 
export default Dictionary;