import React from "react";
// import Grid from "../elements/Grid";
// import Image from "../elements/Image";
// import Text from "../elements/Text";

import { Grid, Image, Text } from "../elements";

const Post = (props) => {
  console.log("aaa", props.id);
  console.log("nick", props.user_info);
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex>
          <Image shape="circle" src={props.src} />
          <Text bold>{props.user_info.user_name}</Text>
          <Text>{props.insert_dt}</Text>
        </Grid>
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.image_url} />
        </Grid>
        <Grid padding="16px">
          <Text margin="0px" bold>
            댓글 {props.comment_cnt}개
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
};

export default Post;
