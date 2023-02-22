import React, { useState, useEffect } from "react";
import axios from "axios";
import Flex from "../../../component/Flex/Flex";
import styled from "styled-components";
import IconWrapper from "./IconWrapper";
import Zoom from "./icons/Zoom";
import YoutubeIcon from "./icons/YoutubeIcon";
import Chrome from "./icons/Chrome";
import YouTube from "react-youtube";
import { IoClose } from "react-icons/io5";
import Netflix from "./icons/Netflix";
import Mail from "./icons/Mail";
import Amazon from "./icons/Amazon";
import Hyundai from "./icons/Hyundai";
import D0 from "./icons/D0";
import D1 from "./icons/D1";
import D3 from "./icons/D3";
import D4 from "./icons/D4";
import D5 from "./icons/D5";
import D6 from "./icons/D6";
import D7 from "./icons/D7";
import D9 from "./icons/D9";
import D10 from "./icons/D10";
import D11 from "./icons/D11";
import D15 from "./icons/D15";
import D17 from "./icons/D17";
import CarryingWeight from "./CarryingWeight";
import Purchase from "./Purchase";
import Refrigerator from "./Refrigerator";
import Switch from "./Switch";
import Medical from "./Medical";
import Speaker from "./Speaker";

const TrayWrapper = styled(Flex)`
  width: 600px;
  height: 600px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  align-items: baseline;
  justify-content: flex-start;
  padding: 15px 0px;

  // 유튜브 켜졌을 때 패딩 제거
  ${({ isYoutube }) => isYoutube && "padding: 0px"}
`;

const ScrollWrapper = styled.div`
  width: 600px;
  height: 570px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0px 15px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
`;

const YoutubeWrapper = styled.div`
  width: 600px;
  height: 600px;
  border-radius: 20px;
  background-color: white;
  overflow: hidden;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
`;

const AppTray = ({ isInternet, setIsInternet }) => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isYoutube, setIsYoutube] = useState(false);
  const [basicList, setBasicList] = useState([]);
  const [customList, setCustomList] = useState([]);

  useEffect(() => {
    console.log(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    axios
      .post(
        `${process.env.REACT_APP_API}/basic/getBasicList`,
        { basicRecord: parseInt(`${localStorage.getItem("basicRecord")}`) },
        {
          headers: {
            Authorization: `${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((r) => {
        setBasicList(r.data.result.basicNumberList);
      });

    axios
      .post(
        `${process.env.REACT_APP_API}/custom/getCustomList`,
        { customRecord: parseInt(`${localStorage.getItem("customRecord")}`) },
        {
          headers: {
            Authorization: `${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((r) => {
        setCustomList(r.data.result.customNumberList);
      });
  }, []);

  return (
    <>
      {currentIndex === -1 && (
        <TrayWrapper isYoutube={isYoutube}>
          {isYoutube ? (
            <YoutubeWrapper>
              <IoClose
                onClick={() => setIsYoutube(!isYoutube)}
                color="white"
                size="30"
                style={{
                  position: "absolute",
                  marginLeft: "20px",
                  marginTop: "20px",
                  cursor: "pointer",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  borderRadius: "20px",
                }}
              ></IoClose>

              <YouTube
                videoId="HYGhruNONH8"
                opts={{
                  width: "600",
                  height: "600",
                  playerVars: {
                    autoplay: 1,
                    rel: 0,
                    modestbranding: 1,
                  },
                }}
                onEnd={(e) => {
                  e.target.stopVideo(0);
                }}
              />
            </YoutubeWrapper>
          ) : (
            <ScrollWrapper>
              {customList.indexOf(19) !== -1 && <Zoom />}
              {customList.indexOf(20) !== -1 && (
                <YoutubeIcon
                  isYoutube={isYoutube}
                  setIsYoutube={setIsYoutube}
                />
              )}
              {customList.indexOf(21) !== -1 && <Netflix />}
              {customList.indexOf(22) !== -1 && <Mail />}
              {customList.indexOf(23) !== -1 && (
                <Chrome isInternet={isInternet} setIsInternet={setIsInternet} />
              )}
              {customList.indexOf(24) !== -1 && <Amazon />}
              {customList.indexOf(25) !== -1 && <Hyundai />}

              {basicList.indexOf(0) !== -1 && (
                <D0
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                />
              )}
              {basicList.indexOf(1) !== -1 && (
                <D1
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                />
              )}
              {basicList.indexOf(3) !== -1 && (
                <D3
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                />
              )}
              {basicList.indexOf(4) !== -1 && (
                <D4
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                />
              )}
              {basicList.indexOf(5) !== -1 && (
                <D5
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                />
              )}
              {basicList.indexOf(6) !== -1 && (
                <D6
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                />
              )}
              {basicList.indexOf(7) !== -1 && (
                <D7
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                />
              )}
              {basicList.indexOf(9) !== -1 && (
                <D9
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                />
              )}
              {basicList.indexOf(10) !== -1 && (
                <D10
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                />
              )}
              {basicList.indexOf(11) !== -1 && (
                <D11
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                />
              )}
              {basicList.indexOf(15) !== -1 && (
                <D15
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                />
              )}
              {basicList.indexOf(17) !== -1 && (
                <D17
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                />
              )}
            </ScrollWrapper>
          )}
        </TrayWrapper>
      )}
      {(currentIndex === 0 || currentIndex === 3) && (
        <CarryingWeight
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      )}
      {currentIndex === 1 && (
        <Purchase
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      )}
      {(currentIndex === 4 || currentIndex === 11) && (
        <Refrigerator
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      )}
      {(currentIndex === 5 || currentIndex === 9 || currentIndex === 17) && (
        <Switch currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      )}
      {(currentIndex === 6 || currentIndex === 7) && (
        <Medical
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      )}
      {currentIndex === 15 && (
        <Speaker
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      )}
    </>
  );
};

export default AppTray;
