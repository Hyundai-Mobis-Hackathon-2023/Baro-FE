import React, { useState } from "react";
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
  const [isYoutube, setIsYoutube] = useState(false);

  return (
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
          <Zoom />
          <YoutubeIcon isYoutube={isYoutube} setIsYoutube={setIsYoutube} />
          <Netflix />
          <Mail />
          <Chrome isInternet={isInternet} setIsInternet={setIsInternet} />
          <Amazon />
          <Hyundai />
          <IconWrapper />
          <IconWrapper />
          <IconWrapper />
          <IconWrapper />
          <IconWrapper />
          <IconWrapper />
          <IconWrapper />
          <IconWrapper />
          <IconWrapper />
          <IconWrapper />
        </ScrollWrapper>
      )}
    </TrayWrapper>
  );
};

export default AppTray;
