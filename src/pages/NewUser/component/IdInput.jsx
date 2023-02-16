import React from "react";
import { useRef } from "react";
import styled from "styled-components";
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
`;

const StyledTextarea = styled.textarea`
  width: 320px;
  font-family: "pretendard-bold";
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  word-wrap: break-word;
  word-break: keep-all;
  border: none;
  overflow: hidden;
  caret-color: #c65252;
  background: none;
  resize: none;
  ::placeholder {
    color: #e0dede;
  }
`;

const IdInput = ({ currentPage, setCurrentPage, id, setId }) => {
  const textRef = useRef(null);

  const textChanged = () => {
    setId(textRef.current.value);
  };

  const checkEnterAndSpace = (e) => {
    if (e.key === " ") e.preventDefault();
    else if (e.key === "Enter") {
      e.preventDefault();
      moveToNext();
    }
  };

  const moveToNext = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <StyledMotion
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Margin height="114" />
      <Typography $buttonText>사용할 아이디를 알려주세요</Typography>
      <Margin height="34" />
      <StyledTextarea
        autoFocus
        ref={textRef}
        placeholder="입력해주세요"
        maxLength="30"
        onChange={textChanged}
        onKeyPress={checkEnterAndSpace}
      />
      <Margin height="208" />
      <Button bgColor={id === "" ? "gray" : "mainRed"} onClick={moveToNext}>
        다음
      </Button>
    </StyledMotion>
  );
};

export default IdInput;
