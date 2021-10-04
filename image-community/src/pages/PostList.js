import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../redux/configureStore";

import Post from "../components/Post";
import { Button } from "../elements";
import { actionCreators as postActions } from "../redux/modules/post";
import Permit from "../shared/Permit";

const PostList = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);

  console.log(post_list);

  React.useEffect(() => {
    if (post_list.length === 0) {
      dispatch(postActions.getPostFB());
    }
  }, []);
  return (
    <React.Fragment>
      {/* <Post /> */}
      {post_list.map((p, idx) => {
        return <Post key={p.id} {...p} />;
      })}
      {/* <Permit>
        <Button
          is_float
          text="+"
          _onClick={() => {
            history.push("/write");
          }}
        ></Button>
      </Permit> */}
    </React.Fragment>
  );
};

export default PostList;
