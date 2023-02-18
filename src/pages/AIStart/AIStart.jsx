import React from "react";
import styled from "styled-components";
import MobileLayout from "../../component/MobileLayout/MobileLayout";
import Margin from "../../component/Margin/Margin";
import Lottie from "lottie-react";
import lottieAI from "../../assets/svgs/lottieAI.json";
import Typography from "../../component/Typography/Typhography";
import Button from "../../component/Button/Button";
import { useNavigate } from "react-router-dom";

const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    190.59deg,
    rgba(151, 91, 227, 0.6) 0.59%,
    rgba(151, 91, 227, 0.813753) 26.98%,
    #7000ff 97.46%
  );
`;

const TextWrapper = styled.div`
  width: 100%;
  height: 70px;
  padding-left: 39px;
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 74px;
`;

const AIStart = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <Background>
        <Margin height="50" />
        <Lottie animationData={lottieAI} />
        <Margin height="50" />
        <TextWrapper>
          <Typography mainTitle color="white">
            AI와 함께 구상해요
          </Typography>
          <Margin height="20" />
          <Typography aiContentText color="white">
            openAI로 이루어진 채팅봇과 함께 당신에게
            <br />
            알맞는 현대 PBV를 찾아보세요.
            <br />
            알맞은 사용법을 여기에 적어줍니다.
          </Typography>
        </TextWrapper>
        <ButtonWrapper>
          <Button
            bgColor="white"
            color="black"
            onClick={() => navigate("/ai-chat")}
          >
            AI 만나기
          </Button>
        </ButtonWrapper>
      </Background>
    </MobileLayout>
  );
};

export default AIStart;

/*
import { ReactComponent as Loading } from "../../assets/svgs/loading.svg";
<Margin height="241" />
        <Loading />
<Margin height="100" />
        <Lottie animationData={lottie1} />
*/
