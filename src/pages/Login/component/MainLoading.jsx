import React from "react";
import Flex from "../../../component/Flex/Flex";
import styled from "styled-components";
import logo from "../images/Baro.png";
import Margin from "../../../component/Margin/Margin";
import Typography from "../../../component/Typography/Typhography";

const StartPageWrapper = styled(Flex)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(
      72.26% 45.91% at 50% 54.09%,
      rgba(224, 222, 222, 0.6) 0%,
      rgba(224, 222, 222, 0) 100%
    ),
    #ffffff;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  z-index: ${(props) => (props.visible === true ? 100 : -10)};
  opacity: ${(props) => (props.visible === true ? 1 : 0)};
  transition: 0.75s;
`;

const StyledImage = styled.img`
  width: 220px;
  height: 220px;
`;

const MainLoading = ({ visible }) => {
  return (
    <StartPageWrapper flexCenter column visible={visible}>
      <StyledImage src={logo} />
      <Typography buttonText style={{ fontSize: "20px" }}>
        당신만의 현대, 당신만의 PBV
      </Typography>
      <Margin height="100" />
    </StartPageWrapper>
  );
};

export default MainLoading;
