import React from "react";
import styled from "styled-components";
import Flex from "../../../component/Flex/Flex";
import image from "../files/music.jpg";
import Margin from "../../../component/Margin/Margin";
import music from "../files/banana.mp3";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { BsBullseye } from "react-icons/bs";
import Typography from "../../../component/Typography/Typhography";

const MusicWrapper = styled(Flex)`
  width: 409px;
  height: 193px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
`;

const StyledImage = styled.img`
  width: 129px;
  height: 129px;
  object-fit: cover;
  border-radius: 10px;
  border: none;
`;

const StyledIcon = styled(BsBullseye)`
  size: 21px;
  position: relative;
  left: 37px;
  bottom: 10px;
`;

const StyledAudio = styled(AudioPlayer)`
  &.rhap_container {
    width: 190px;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    box-shadow: none;
    padding: 0;
  }

  &.rhap_time,
  .rhap_current-time {
    display: none;
  }

  &.rhap_time,
  .rhap_total-time {
    display: none;
  }

  &.rhap_progress-container {
    margin: 0;
  }

  &.rhap_progress-bar,
  .rhap_progress-bar-show-download {
    background-color: #ffffff;
  }

  &.rhap_container svg {
    width: 27px;
    color: white;
  }

  &.rhap_progress-filled,
  .rhap_progress-indicator {
    background-color: #ffffff;
    width: 10px;
    height: 10px;
    margin-top: 5.5px;
    margin-left: -3px;
    filter: none;
    box-shadow: none;
  }
  &.rhap_main-controls {
    width: 190px;
    display: flex;
    flex-direction: column;
  }

  & .rhap_forward-button {
    margin-left: 30px;
  }

  & .rhap_rewind-button {
    margin-right: 30px;
  }
`;

const Music = () => {
  return (
    <MusicWrapper flexCenter>
      <StyledImage src={image} />
      <Margin width="25" />
      <Flex flexCenter column align="baseline">
        <Typography
          buttonText
          color="white"
          style={{
            fontSize: "20px",
            paddingLeft: "10px",
          }}
        >
          Banana Shake
          <StyledIcon />
        </Typography>
        <Typography
          maxNumberText
          style={{ fontSize: "16px", paddingLeft: "10px", color: "#bebebe" }}
        >
          HUS
        </Typography>
        <Margin height="15" />
        <StyledAudio
          src={music}
          customVolumeControls={[]}
          customAdditionalControls={[]}
          showFilledProgress={false}
          showDownloadProgress={false}
        />
      </Flex>
    </MusicWrapper>
  );
};

export default Music;
