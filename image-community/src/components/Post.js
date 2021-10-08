import React from "react";
// import Grid from "../elements/Grid";
// import Image from "../elements/Image";
// import Text from "../elements/Text";

import { Button, Grid, Image, Text } from "../elements";
import { actionCreators as postActions } from "../redux/modules/post";

import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import HeartButton from "./HeartButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

const Post = (props) => {
  const dispatch = useDispatch();

  // const [like, setLike] = React.useState(false);

  // React.useEffect(async () => {
  //   const fetchData = async () => {
  //     const res = await axios.get();
  //     if (res.data.type === "liked") setLike(true);
  //   };
  //   fetchData();
  // }, []);

  // const toggleLike = async (e) => {
  //   const res = await axios.post();
  //   setLike(!like);
  // };

  const deletePost = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(postActions.deletePostFB(props.id));
    console.log(props.id);
  };

  return (
    <React.Fragment>
      <Grid is_flex padding="16px" bg="#FEE5A5">
        <Grid is_flex width="auto">
          <Image shape="circle" src={props.src} />
          <Text bold>{props.user_info.user_name}</Text>
        </Grid>
        <Grid is_flex width="auto">
          <Text margin="0px 10px">{props.insert_dt}</Text>
          {props.is_me && (
            <CreateOutlinedIcon
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                history.push(`/write/${props.id}`);
              }}
              cursor="pointer"
            />
          )}
          {props.is_me && (
            <DeleteOutlineIcon onClick={deletePost} cursor="pointer" />
          )}
        </Grid>
      </Grid>
      <Grid padding="16px" bg="#FEE5A5">
        <Text>{props.contents}</Text>
      </Grid>
      <Grid>
        <Image shape="rectangle" src={props.image_url} />
      </Grid>
      <Grid padding="16px" is_flex>
        <Grid padding="5px" bg="#FEE5A5">
          <Text margin="0px" bold>
            댓글 {props.comment_cnt}개
          </Text>
        </Grid>
        <Grid is_flex padding="5px">
          <HeartButton margin="auto" />
          <Text margin="0px" bold>
            좋아요 {props.like_cnt}개
          </Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "arong",
    user_profile:
      "https://post-phinf.pstatic.net/MjAxODExMDFfMjQ0/MDAxNTQxMDc1OTYxNTQ1.swIFGuyl3AYqIIXURgGUzwhcfcHuPKQSGEqALrLXvJog.z-H2r8p-xtUxUYeJy9dqMx4QSezkf0jNwznlYr3gIhIg.JPEG/%EB%AA%A8%EB%84%A4_%EC%95%84%EB%A5%B4%EC%9E%A5%ED%87%B4%EC%9C%A0%EC%9D%98_%EC%96%91%EA%B7%80%EB%B9%84%EA%BD%83%281873%29.JPG?type=w1200",
  },
  image_url:
    "https://post-phinf.pstatic.net/MjAxODExMDFfMjQ0/MDAxNTQxMDc1OTYxNTQ1.swIFGuyl3AYqIIXURgGUzwhcfcHuPKQSGEqALrLXvJog.z-H2r8p-xtUxUYeJy9dqMx4QSezkf0jNwznlYr3gIhIg.JPEG/%EB%AA%A8%EB%84%A4_%EC%95%84%EB%A5%B4%EC%9E%A5%ED%87%B4%EC%9C%A0%EC%9D%98_%EC%96%91%EA%B7%80%EB%B9%84%EA%BD%83%281873%29.JPG?type=w1200",
  contents: "모네입니다",
  comment_cnt: 10,
  insert_dt: "2021-09-30 05:38:02",
  is_me: false,
  like_cnt: 10,
};

export default Post;
