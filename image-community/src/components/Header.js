import React from "react";
import { Grid, Text, Button } from "../elements";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { apiKey } from "../shared/firebase";
import { history } from "../redux/configureStore";

import NotiBadge from "./NotiBadge";

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.user);
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;
  console.log(is_session);
  console.log(is_login);
  if (is_login && is_session) {
    return (
      <Grid is_flex padding="16px" bg={"#FFB838"}>
        <Grid>
          <Text
            margin="0px"
            size="24px"
            bold
            color="white"
            _onClick={() => {
              history.push("/");
            }}
          >
            HELLO
          </Text>
        </Grid>

        <Grid is_flex>
          <NotiBadge
            _onClick={() => {
              history.push("/noti");
            }}
          />
          <Button text="내정보" margin="0px 5px" cursor="pointer"></Button>
          {/* <Button
            _onClick={() => {
              history.push("/noti");
            }}
            text="알림"
          ></Button> */}
          <Button
            text="로그아웃"
            cursor="pointer"
            _onClick={() => {
              dispatch(userActions.logoutFB());
            }}
          ></Button>
        </Grid>
      </Grid>
    );
  }
  // <Permit>

  // </Permit>;

  return (
    <>
      <React.Fragment>
        <Grid is_flex padding="16px" bg={"#FFB838"}>
          <Grid>
            <Text
              margin="0px"
              size="24px"
              bold
              color="white"
              _onClick={() => {
                history.push("/");
              }}
            >
              HELLO
            </Text>
          </Grid>

          <Grid is_flex>
            <Button
              text="로그인"
              cursor="pointer"
              _onClick={() => {
                history.push("/login");
              }}
            ></Button>
            <Button
              text="회원가입"
              cursor="pointer"
              _onClick={() => {
                history.push("/signup");
              }}
            ></Button>
          </Grid>
        </Grid>
      </React.Fragment>
    </>
  );
};

Header.defaultProps = {};

export default Header;
