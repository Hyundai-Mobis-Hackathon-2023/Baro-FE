import React, { useState, useEffect } from "react";
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

const PasswordInput = ({
  currentPage,
  setCurrentPage,
  password,
  setPassword,
}) => {
  const textRef = useRef(null);
  const [isRightPW, setIsRightPW] = useState(false);

  const textChanged = () => {
    setPassword(textRef.current.value);
  };

  const checkEnterAndSpace = (e) => {
    if (e.key === " ") e.preventDefault();
    else if (e.key === "Enter") {
      e.preventDefault();
      moveToNext();
    }
  };

  const moveToNext = () => {
    if (isRightPW) setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    const pwRegex = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    setIsRightPW(pwRegex.test(password));
  }, [password, setIsRightPW]);

  return (
    <StyledMotion
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Margin height="114" />
      <Typography $buttonText>사용할 비밀번호를 알려주세요</Typography>
      <Margin height="6" />
      <Typography
        $alertText
        color={isRightPW || password === "" ? "gray" : "alertRed"}
      >
        * 8~16자 영문 대 소문자, 숫자, 특수문자 이용
      </Typography>
      <Margin height="7" />
      <StyledTextarea
        autoFocus
        ref={textRef}
        placeholder="입력해주세요"
        maxLength="16"
        onChange={textChanged}
        onKeyPress={checkEnterAndSpace}
      />
      <Margin height="212" />
      <Button
        bgColor={password === "" ? "gray" : "mainRed"}
        onClick={moveToNext}
      >
        다음
      </Button>
    </StyledMotion>
  );
};

export default PasswordInput;
