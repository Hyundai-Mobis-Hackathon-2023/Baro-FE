import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Margin from "../../../component/Margin/Margin";
import Flex from "../../../component/Flex/Flex";
import Typography from "../../../component/Typography/Typhography";
import { BsFillCloudHazeFill } from "react-icons/bs";

const TemperWrapper = styled(Flex)`
  width: 225px;
  height: 194px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
`;

const TopWrapper = styled(Flex)`
  width: 175px;
  justify-content: space-between;
  align-items: baseline;
`;

const TextWrapper = styled(Flex)`
  text-align: left;
  align-items: baseline;
`;

const ProgressBar = styled(Flex)`
  width: 190px;
  height: 6px;
  border-radius: 3px;
  background: linear-gradient(90deg, #99e581 0%, #f15b50 100%);
`;

const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ffffff;
  margin-right: 80px;
`;

const CarTemper = () => {
  return (
    <TemperWrapper flexCenter column>
      <TopWrapper flexCenter>
        <TextWrapper flexCenter column>
          <Typography
            alertText
            style={{ fontFamily: "pretendard-semibold", color: "#BEBEBE" }}
          >
            차량 내부 온도
          </Typography>
          <Margin height="8" />
          <Typography buttonText color="white">
            23℃
          </Typography>
          <Margin height="8" />
          <Typography
            alertText
            style={{ fontFamily: "pretendard-semibold", color: "#BEBEBE" }}
          >
            대기질
          </Typography>
          <Margin height="8" />
          <Typography buttonText color="white">
            59 - 보통
          </Typography>
        </TextWrapper>
        <BsFillCloudHazeFill size="22px" color="#ffffff" />
      </TopWrapper>
      <Margin height="15" />
      <ProgressBar>
        <Circle />
      </ProgressBar>
    </TemperWrapper>
  );
};

export default CarTemper;
