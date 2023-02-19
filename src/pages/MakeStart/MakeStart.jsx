import React from "react";
import styled, { keyframes } from "styled-components";
import MobileLayout from "../../component/MobileLayout/MobileLayout";
import Typography from "../../component/Typography/Typhography";
import Car from "./CAR.png";

const CarAnimation = keyframes`
  0% {
    right: -50%;
  }

  30% {
    right: -6%;
  }

  35%{
    right: -3%;
    transform: rotate(5deg);
  }
  50%{
    right: -1%;
    transform: rotate(0deg);
  }
  65%{
    right: 1%;
    transform: rotate(-3deg);
  }
  70% {
    right: 4%;
  }


  100% {
    right: 80%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const ImgTextWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const CarSection = styled.img`
  animation: ${CarAnimation} 2s infinite linear;
  animation-duration: 2.2s;
  animation-delay: 0s;
  position: relative;
  top: 20%;
  margin-bottom: 20px;
`;

const MakeStart = () => {
  return (
    <>
      <MobileLayout color={"mainRed"}>
        <Wrapper>
          <ImgTextWrapper>
            <CarSection src={Car} />
            <Typography loadingText color="white">
              잠시만 기다려주세요
            </Typography>
          </ImgTextWrapper>
        </Wrapper>
      </MobileLayout>
    </>
  );
};

export default MakeStart;
