import React from "react";
import { useRef } from "react";
import styled from "styled-components";
import Flex from "../../../component/Flex/Flex";
import Button from "../../../component/Button/Button";
import Margin from "../../../component/Margin/Margin";
import Typography from "../../../component/Typography/Typhography";
import { motion } from "framer-motion";
import { HiOutlineLocationMarker } from "react-icons/hi";

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

  const locationChanged = () => {
    setLocation(locationRef.current.value);
  };

  const moveToNext = () => {
    if (location !== "") {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <StyledMotion
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Margin height="238" />
      <StyledTypo alertText>탑승할 주소를 입력해주세요.</StyledTypo>
      <Margin height="24" />
      <InputWrapper flexCenter>
        <StyledInput
          value={location}
          ref={locationRef}
          onChange={locationChanged}
          placeholder="주소 검색"
        />
        <HiOutlineLocationMarker size="24px" color="#c65252" />
      </InputWrapper>
      <Margin height="89" />
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
