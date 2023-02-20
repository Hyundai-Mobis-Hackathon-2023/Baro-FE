/* global kakao */
import React, { useState, useEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";
import Flex from "../../../component/Flex/Flex";
import Button from "../../../component/Button/Button";
import Margin from "../../../component/Margin/Margin";
import Typography from "../../../component/Typography/Typhography";
import { motion } from "framer-motion";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Map, MapMarker } from "react-kakao-maps-sdk";
const { kakao } = window;

const StyledMotion = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
`;

const StyledTypo = styled(Typography)`
  width: 310px;
  text-align: left;
`;

const InputWrapper = styled(Flex)`
  width: 310px;
  height: 47px;
  border: 1px solid #bdbdbd;
  border-radius: 20px;
`;

const StyledInput = styled.input`
  width: 233px;
  font-family: "pretendard-regular";
  font-size: 16px;
  line-height: 19px;
  caret-color: #c65252;
  margin-right: 7px;
  ::placeholder {
    color: #bdbdbd;
  }
`;

const StyledMap = styled(Map)`
  width: 310px;
  height: 310px;
  border-radius: 15px;
  border: 1px solid #bdbdbd;
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 72px;
`;

const LocationInput = ({
  currentPage,
  setCurrentPage,
  location,
  setLocation,
}) => {
  const locationRef = useRef(null);
  const [latitude, setLatitude] = useState(37.44937029089704);
  const [longitude, setLongitude] = useState(126.65436049042351);

  const locationChanged = () => {
    setLocation(locationRef.current.value);
  };

  const moveToNext = () => {
    if (location !== "") {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToCurrentPosition = () => {
    setLatitude(37.51781821042673);
    setLongitude(127.02454910944577);
    setLocation("보코 서울 강남");
  };

  const checkEnter = (e) => {
    let ps = new kakao.maps.services.Places();
    const placesSearchCB = function (data, status, pagination) {
      const ps = new kakao.maps.services.Places();
      if (status === kakao.maps.services.Status.OK) {
        const newSearch = data[0];
        setLatitude(newSearch.y);
        setLongitude(newSearch.x);
      }
    };
    if (e.key === "Enter") {
      e.preventDefault();
      ps.keywordSearch(location, placesSearchCB);
    }
  };

  return (
    <StyledMotion
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Margin height="238" />
      <StyledTypo alertText>수령할 주소를 입력해주세요.</StyledTypo>
      <Margin height="24" />
      <InputWrapper flexCenter>
        <StyledInput
          value={location}
          ref={locationRef}
          onChange={locationChanged}
          placeholder="주소 검색"
          onKeyPress={checkEnter}
        />
        <HiOutlineLocationMarker
          size="24px"
          color="#c65252"
          onClick={goToCurrentPosition}
          style={{ cursor: "pointer" }}
        />
      </InputWrapper>
      <Margin height="24" />
      <StyledMap center={{ lat: latitude, lng: longitude }} isPanto={true}>
        <MapMarker position={{ lat: latitude, lng: longitude }} />
      </StyledMap>
      <ButtonWrapper>
        <Button
          bgColor={location === "" ? "gray" : "mainRed"}
          onClick={moveToNext}
        >
          다음 단계로
        </Button>
      </ButtonWrapper>
    </StyledMotion>
  );
};

export default LocationInput;
