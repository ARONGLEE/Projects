import React from "react";
import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";
import Post from "../components/Post";

const PostDetail = (props) => {
  return (
    <React.Fragment>
      <Post />
      <CommentWrite />
      <CommentList />
    </React.Fragment>
  );
};

export default PostDetail;
