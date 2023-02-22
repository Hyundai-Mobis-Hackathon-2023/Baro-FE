import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Margin from "../../../component/Margin/Margin";
import Flex from "../../../component/Flex/Flex";
import Typography from "../../../component/Typography/Typhography";
import { MdElectricalServices } from "react-icons/md";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";
const { kakao } = window;

const MapWrapper = styled(Flex)`
  width: 438px;
  height: 600px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
`;

const TopWrapper = styled(Flex)`
  width: 380px;
  justify-content: space-between;
`;

const KmTextWrapper = styled(Flex)`
  text-align: left;
  align-items: baseline;
`;

const PowerWrapper = styled.div`
  width: 126px;
  height: 126px;
`;

const StyledMap = styled(Map)`
  width: 380px;
  height: 358px;
  border-radius: 25px;
  border: 1px solid #bdbdbd;
  margin-top: 8px;
`;

const MapInfoWrapper = styled.div`
  position: absolute;
  width: 348px;
  height: 95px;
  background: rgba(0, 0, 0, 0.6);
  padding-left: 20px;
  margin-top: 380px;
  z-index: 3;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MapInfo = () => {
  const [location, setLocation] = useState("보코 서울 강남");
  const [latitude, setLatitude] = useState(37.44937029089704);
  const [longitude, setLongitude] = useState(126.65436049042351);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/user/orderInfo`, {
        headers: {
          Authorization: `${localStorage.getItem("accessToken")}`,
        },
      })
      .then((r) => {
        console.log(r.data);
        setLocation(r.data.result.address);
      });
  }, []);

  useEffect(() => {
    let ps = new kakao.maps.services.Places();
    const placesSearchCB = function (data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        const newSearch = data[0];
        setLatitude(newSearch.y);
        setLongitude(newSearch.x);
      }
    };
    ps.keywordSearch(location, placesSearchCB);
  }, [location]);

  return (
    <MapWrapper flexCenter column>
      <TopWrapper flexCenter>
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
            <span style={{ color: "#BEBEBE" }}>베터리 : </span>91%
          </Typography>
        </KmTextWrapper>
        <PowerWrapper>
          <CircularProgressbarWithChildren
            value={91}
            style={{ width: "126px" }}
            styles={buildStyles({
              strokeLinecap: "round",
              pathTransitionDuration: 0.5,
              trailColor: "#29381e",
              pathColor: "#89d659",
            })}
          >
            <MdElectricalServices size="72px" color="#ffffff" />
          </CircularProgressbarWithChildren>
        </PowerWrapper>
      </TopWrapper>
      <Margin height="20" />
      <StyledMap center={{ lat: latitude, lng: longitude }} isPanto={true}>
        <MapInfoWrapper>
          <Typography maxNumberText color="white" style={{ fontSize: "20px" }}>
            {location}
          </Typography>
          <Margin height="10" />
          <Typography
            maxNumberText
            style={{ color: "#bebebe", fontSize: "18px" }}
          >
            0.0km
          </Typography>
        </MapInfoWrapper>
        <MapMarker position={{ lat: latitude, lng: longitude }} />
      </StyledMap>
    </MapWrapper>
  );
};

export default MapInfo;
