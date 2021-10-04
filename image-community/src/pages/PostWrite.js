import React from "react";
import { Grid, Input, Text, Image, Button } from "../elements";
import Upload from "../shared/Upload";

const PostWrite = (props) => {
  return (
    <React.Fragment>
      <Grid padding="16px">
        <Text margin="0px" size="32px" bold>
          게시글 작성
        </Text>
        <Upload />
      </Grid>
      <Grid padding="16px">
        <Text margin="0px" size="24px" bold>
          미리보기
        </Text>
      </Grid>
      <Grid>
        <Image shape="rectangle" src={props.src} />
      </Grid>
      <Grid padding="16px">
        <Input
          multiLine
          label="게시글 내용"
          placeholder="게시글 작성"
          _onChange={() => {
            console.log("게시글 입력중");
          }}
        />
      </Grid>
      <Grid padding="16px">
        <Button
          text="게시글 작성"
          _onClick={() => {
            console.log("게시글 작성 클릭!");
          }}
        ></Button>
      </Grid>
    </React.Fragment>
  );
};

export default PostWrite;
