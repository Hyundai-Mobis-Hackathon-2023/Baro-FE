import React from "react";
import styled from "styled-components";
import Margin from "../../../component/Margin/Margin";
import Flex from "../../../component/Flex/Flex";
import Typography from "./../../../component/Typography/Typhography";

const MapWrapper = styled(Flex)`
  width: 438px;
  height: 600px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
`;

const TopWrapper = styled(Flex)`
  width: 380;
  justify-content: space-between;
`;

const KmTextWrapper = styled(Flex)`
  text-align: left;
  justify-content: baseline;
`;

const Map = () => {
  return (
    <MapWrapper>
      <TopWrapper>
        <KmTextWrapper flexCenter column>
          <Typography mainTitle color="white">
            <span
              style={{
                fontFamily: "pretendard-regular",
                fontSize: "80px",
                marginRight: "12px",
              }}
            >
              65
            </span>
            km/h
          </Typography>
          <Margin height="12" />
          <Typography contentText color="white" style={{ fontSize: "20px" }}>
            <span style={{ color: "#BEBEBE" }}>남은 시간 : </span>1시간 29분
          </Typography>
          <Margin height="12" />
          <Typography contentText color="white" style={{ fontSize: "20px" }}>
            <span style={{ color: "#BEBEBE" }}>베터리 : </span>100%
          </Typography>
        </KmTextWrapper>
      </TopWrapper>
    </MapWrapper>
  );
};

export default Map;
