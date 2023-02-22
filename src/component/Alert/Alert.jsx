import React from "react";
import styled from "styled-components";
import loading from "../../assets/svgs/loading.json";
import Typography from "../Typography/Typhography";
import Margin from "../../component/Margin/Margin";
import Lottie from "lottie-react";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  z-index: 100;
  display: none;
  @media (max-width: 1800px) {
    ${(props) => props.theme.flex.flexCenterColumn}
  }
  vertical-align: middle;
`;

const Alert = () => {
  return (
    <Wrapper>
      <Margin height="10" />
      <Typography mainTitle color="white">
        이런!
      </Typography>
      <Margin height="10" />
      <Typography buttonText color="white">
        Baro는 1800px 미만 환경을 지원하지 않아요.
      </Typography>
      <Margin height="13" />
      <Typography buttonText color="gray">
        창 크기를 전체 화면으로 변경하거나,
      </Typography>
      <Margin height="4" />
      <Typography buttonText color="gray">
        더 큰 화면의 기기에서 접속해주세요.
      </Typography>
    </Wrapper>
  );
};

export default Alert;
