import React, { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router";
import styled, { css } from "styled-components";
import Flex from "../../../component/Flex/Flex";
import Button from "../../../component/Button/Button";
import Margin from "../../../component/Margin/Margin";
import Typography from "../../../component/Typography/Typhography";
import { motion } from "framer-motion";

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

const StyledInput = styled.input`
  width: ${(props) => (props.width ? props.width : "310")}px;
  height: 35px;
  font-family: "pretendard-regular";
  font-size: 16px;
  line-height: 19px;
  caret-color: #c65252;
  border-bottom: 2px solid #bdbdbd;
  ::placeholder {
    color: #e0dede;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  ${(props) =>
    props.fix &&
    css`
      font-family: "pretendard-bold";
      padding-left: 10px;
      ::placeholder {
        color: #1b1313;
      }
    `}
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 74px;
`;

const InfoInput = ({
  currentPage,
  setCurrentPage,
  name,
  setName,
  number,
  setNumber,
}) => {
  const nameRef = useRef(null);
  const numberRef = useRef(null);

  const nameChanged = () => {
    setName(nameRef.current.value);
  };

  const numberChanged = () => {
    setNumber(numberRef.current.value);
  };

  const moveToNext = () => {
    if (name !== "" && number !== "") {
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
      <StyledTypo alertText>탑승자 이름을 적어주세요.</StyledTypo>
      <Margin height="14" />
      <StyledInput
        value={name}
        ref={nameRef}
        maxLength="20"
        onChange={nameChanged}
        placeholder="이름을 입력하세요"
      />
      <Margin height="89" />
      <StyledTypo alertText>연락 가능한 연락처를 적어주세요.</StyledTypo>
      <Margin height="14" />
      <Flex flexCenter>
        <StyledInput placeholder="+82" width="56" fix disabled />
        <Margin width="14" />
        <StyledInput
          value={number}
          ref={numberRef}
          type="number"
          maxLength="11"
          width="240"
          onChange={numberChanged}
          placeholder="번호를 입력하세요"
        />
      </Flex>
      <ButtonWrapper>
        <Button
          bgColor={name === "" || number === "" ? "gray" : "mainRed"}
          onClick={moveToNext}
        >
          다음 단계로
        </Button>
      </ButtonWrapper>
    </StyledMotion>
  );
};

export default InfoInput;
