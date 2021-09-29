import { db } from '../../firebase';
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

// Actions
const LOAD = 'dic/LOAD';
const CREATE = 'dic/CREATE';
// const UPDATE = 'dic/UPDATE';
// const DELETE = 'dic/DELETE';
const LOADED = 'dic/LOADED';

const initialState = {
    is_loaded: false,
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

// export function updateDic(dic){
//     console.log("액션을 수정할거야");
//     return {type: UPDATE, dic };
// }

// export function deleteDic(dic_id){
//     console.log("액션을 삭제할거야");
//     return {type: DELETE, dic_id};
// }

export function isLoaded(loaded){
    return { type: LOADED, loaded };
}

//middlewares
export const loadDicFB = () => {
    return async function (dispatch) {
        const dic_data = await getDocs(collection(db, "dic"));

        let dic_list = [];

        dic_data.forEach((b) => {
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

// export const updateDicFB = (dic) => {
//     return function (dispatch) {
//         console.log(dic);
//     }
// }

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "dic/LOAD": {
            return {...state, list: action.dic_list, is_loaded: true,};
        }
        case "dic/CREATE": {
            console.log("이제 값을 바꿀거야");
            //const new_dic_list = ;
            return{...state, list: [...state.list, action.dic], is_loaded: true };
        }
        // case "dic/UPDATE": {
        //     console.log("이제 값을 수정할거야");
        //     const new_dic_list = state.list.map((dic) => 
        //     dic.id === action.dic.id ? 
        //         {...dic, ...action.dic} : dic 
        //     );
        //             return {...state, list: new_dic_list};
        //     };
        // case "dic/DELETE": {
        //     console.log("이제 값을 삭제할거야");
        //     const new_dic_list = state.list.filter((dic) => dic.id !== action.dic_id);
        //         return {...state, list: new_dic_list};
        // }
        case "dic/LOADED": {
            return {...state, is_loaded: action.loaded };
        }
    // do reducer stuff
    default: return state;
    }
    }
