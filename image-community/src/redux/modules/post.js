import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { firestore, storage } from "../../shared/firebase";
// import "moment";
import moment from "moment";

import { actionCreators as imageActions } from "./image";

const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));

const initialState = {
  list: [],
};

const initialPost = {
  //   id: 0,
  //   user_info: {
  //     user_name: "arong",
  //     user_profile:
  //       "https://post-phinf.pstatic.net/MjAxODExMDFfMjQ0/MDAxNTQxMDc1OTYxNTQ1.swIFGuyl3AYqIIXURgGUzwhcfcHuPKQSGEqALrLXvJog.z-H2r8p-xtUxUYeJy9dqMx4QSezkf0jNwznlYr3gIhIg.JPEG/%EB%AA%A8%EB%84%A4_%EC%95%84%EB%A5%B4%EC%9E%A5%ED%87%B4%EC%9C%A0%EC%9D%98_%EC%96%91%EA%B7%80%EB%B9%84%EA%BD%83%281873%29.JPG?type=w1200",
  //   },
  image_url:
    "https://post-phinf.pstatic.net/MjAxODExMDFfMjQ0/MDAxNTQxMDc1OTYxNTQ1.swIFGuyl3AYqIIXURgGUzwhcfcHuPKQSGEqALrLXvJog.z-H2r8p-xtUxUYeJy9dqMx4QSezkf0jNwznlYr3gIhIg.JPEG/%EB%AA%A8%EB%84%A4_%EC%95%84%EB%A5%B4%EC%9E%A5%ED%87%B4%EC%9C%A0%EC%9D%98_%EC%96%91%EA%B7%80%EB%B9%84%EA%BD%83%281873%29.JPG?type=w1200",
  contents: "",
  comment_cnt: 0,
  insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
  //   insert_dt: "2021-09-30 05:38:02",
};

const addPostFB = (contents = "") => {
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection("post");
    const _user = getState().user.user;

    const user_info = {
      user_name: _user.user_name,
      user_id: _user.uid,
      user_profile: _user.user_profile,
    };
    const _post = {
      ...initialPost,
      contents: contents,
      insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
    };

    const _image = getState().image.preview;

    console.log(_image);

    const _upload = storage
      .ref(`images/${user_info.user_id}_${new Date().getTime()}`)
      .putString(_image, "data_url");

    _upload.then((snapshot) => {
      snapshot.ref
        .getDownloadURL()
        .then((url) => {
          console.log(url);

          return url;
        })
        .then((url) => {
          postDB
            .add({ ...user_info, ..._post, image_url: url })
            .then((doc) => {
              let post = { user_info, ..._post, id: doc.id, image_url: url };
              dispatch(addPost(post));
              history.replace("/");

              dispatch(imageActions.setPreview(null));
            })
            .catch((err) => {
              window.alert("포스트 작성에 문제가 있습니다!");
              console.log("post 작성에 실패했어요!", err);
            });
        })
        .catch((err) => {
          window.alert("이미지 업로드에 문제가 있어요!");
          console.log("앗! 이미지 업로드에 문제가 있어요!", err);
        });
    });
    return;
  };
};

const getPostFB = () => {
  return function (dispatch, getState, { history }) {
    const postDB = firestore.collection("post");

    postDB.get().then((docs) => {
      let post_list = [];
      docs.forEach((doc) => {
        let _post = doc.data();

        //Object.keys: key값들을 배열로 만들어 준다. -> 배열로 되면 내장함수 사용가능(reduce사용! filter, map과 비슷하다.)
        //acc는 맨 처음에 아래 있는 딕셔너리가 나온다. cur은 키값이 하나씩 들어온다.
        //[]를 사용하면 변수안에 들어있는 키값을 넣을 수 있다.
        //_post[cur] : value
        //cur.indexOf("user_"): 키값에 user_가 포함이 되냐는 의미
        //!== -1 : -1이 아니라면의 의미는 포함이 된다면이라는 의미
        let post = Object.keys(_post).reduce(
          (acc, cur) => {
            if (cur.indexOf("user_") !== -1) {
              return {
                ...acc,
                user_info: { ...acc.user_info, [cur]: _post[cur] },
              };
            }
            return { ...acc, [cur]: _post[cur] };
          },
          { id: doc.id, user_info: {} } //id가 안들어있기때문에 미리 id값 넣어두기
        );

        post_list.push(post);
      });
      console.log(post_list);

      dispatch(setPost(post_list));
    });
  };
};

export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        //빈 배열에 post_list 넣어주기!
        draft.list = action.payload.post_list;
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
      }),
  },
  initialState
);

const actionCreators = {
  setPost,
  addPost,
  getPostFB,
  addPostFB,
};

export { actionCreators };
