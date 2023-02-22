import React, { useState, useEffect } from "react";
import Flex from "../../../component/Flex/Flex";
import styled from "styled-components";
import Typography from "../../../component/Typography/Typhography";
import axios from "axios";

const WelcomeWrapper = styled(Flex)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: black;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  z-index: ${(props) => (props.visible === true ? 100 : -10)};
  opacity: ${(props) => (props.visible === true ? 1 : 0)};
  transition: 0.75s;
`;

const Welcome = ({ visible }) => {
  const [name, setName] = useState("");
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/user/orderInfo`, {
        headers: {
          Authorization: `${localStorage.getItem("accessToken")}`,
        },
      })
      .then((r) => {
        console.log(r.data);
        setName(r.data.result.orderName);
      });
  }, []);
  return (
    <WelcomeWrapper flexCenter column visible={visible}>
      <Typography mainTitle color="white" style={{ fontSize: "50px" }}>
        안녕하세요, {name}님. 탑승을 환영합니다.
      </Typography>
    </WelcomeWrapper>
  );
};

export default Welcome;
