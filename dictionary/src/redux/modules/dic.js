import { db } from '../../firebase';
import { collection, getDoc, getDocs, addDoc } from 'firebase/firestore';

// Actions
const LOAD = 'dic/LOAD';
const CREATE = 'dic/CREATE';


const initialState = {
    list: [],
    //list: [{word : "댕댕이", explanation: "강아지를 의미한다.", example: "우리집 댕댕이 보여줄까?"}],
};

// Action Creators
export function loadDic(dic_list) {
    return {type: LOAD, dic_list}
}

export function createDic(dic){
    console.log("액션을 생성할거야");
    return { type: CREATE, dic};
}

//middlewares
export const loadDicFB = () => {
    return async function (dispatch) {
        const dic_data = await getDocs(collection(db, "dic"));
        console.log(dic_data);

        let dic_list = [];

        dic_data.forEach((b) => {
            console.log(b.data());
            dic_list.push({id: b.id, ...b.data()});
        });
        console.log(dic_list);

        dispatch(loadDic(dic_list));

    };
};

export const addDicFB = (dic) => {
    return async function (dispatch) {
        const docRef = await addDoc(collection(db, "dic"), dic);
        const dic_data = {id: docRef.id, ...dic};
        console.log(dic_data);
        dispatch(createDic(dic_data));
    }

}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "dic/LOAD": {
            return {list: action.dic_list};
        }
        case "dic/CREATE": {
            console.log("이제 값을 바꿀거야");
            const new_dic_list = [...state.list, action.dic];
            return{...state, list:new_dic_list };
        }
       
    // do reducer stuff
    default: return state;
    }
    }