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

const IconWrapper = styled.div`
  width: 326px;
  ${(props) => props.theme.flex.flexCenter}
  justify-content: space-between;
`;

const StyledTextarea = styled.textarea`
  width: 320px;
  ${(props) => props.theme.text.buttonText}
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

const AIInput = () => {
  return (
    <StyledMotion
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <IconWrapper></IconWrapper>
      <Margin height="56" />
      <Typography buttonText>
        안녕하세요. 00채팅봇입니다.
        <br />
        어떤 차를 원하시나요?
      </Typography>
      <Margin height="20" />
      <StyledTextarea
        autoFocus
        ref={textRef}
        placeholder="입력해주세요"
        maxLength="30"
        onChange={textChanged}
        onKeyPress={checkEnterAndSpace}
      />
      <Margin height="200" />
      <Typography color="darkGray">* 최대 20자까지 입력 가능합니다.</Typography>
    </StyledMotion>
  );
};

export default AIInput;
