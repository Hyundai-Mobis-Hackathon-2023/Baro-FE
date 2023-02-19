import React, { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router";
import { MdArrowBackIos, MdMenu } from "react-icons/md";
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

const IconWrapper = styled.div`
  width: 326px;
  ${(props) => props.theme.flex.flexCenter}
  justify-content: space-between;
`;

const StyledTextarea = styled.textarea`
  width: 320px;
  font-family: "Pretendard-bold";
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
  word-wrap: break-word;
  word-break: keep-all;
  border: none;
  overflow: hidden;
  caret-color: #8a5bdf;
  background: none;
  resize: none;
  ::placeholder {
    color: #e0dede;
  }
`;

const AIInput = ({ currentPage, setCurrentPage }) => {
  const textRef = useRef(null);
  const navigate = useNavigate();
  const [question, setQuestion] = useState("");

  const textChanged = () => {
    setQuestion(textRef.current.value);
  };

  const moveToNext = () => {
    if (question !== "") {
      setCurrentPage(currentPage + 1);
    }
  };

  const checkEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      moveToNext();
    }
  };

  return (
    <StyledMotion
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Margin height="60" />
      <IconWrapper>
        <MdArrowBackIos
          size="30px"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(-1)}
        />
        <MdMenu size="30px" />
      </IconWrapper>
      <Margin height="56" />
      <Typography buttonText style={{ textAlign: "center" }}>
        안녕하세요. 00채팅봇입니다.
        <br />
        어떤 차를 원하시나요?
      </Typography>
      <Margin height="70" />
      <StyledTextarea
        autoFocus
        ref={textRef}
        placeholder="입력해주세요"
        maxLength="30"
        onChange={textChanged}
        onKeyPress={checkEnter}
      />
      <Margin height="200" />
      <Typography
        alertText
        color="darkGray"
        style={{ fontFamily: "pretendard-regular" }}
      >
        * 최대 20자까지 입력 가능합니다.
      </Typography>
      <Margin height="26" />
      <Button
        bgColor={question === "" ? "gray" : "purple"}
        onClick={moveToNext}
      >
        확인
      </Button>
    </StyledMotion>
  );
};

export default AIInput;
