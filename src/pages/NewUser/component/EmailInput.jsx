import React from "react";
import { useRef, useState } from "react";
import styled from "styled-components";
import Button from "../../../component/Button/Button";
import Margin from "../../../component/Margin/Margin";
import Typography from "../../../component/Typography/Typhography";

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

const EmailInput = () => {
  const textRef = useRef(null);
  const [email, setEmail] = useState("");

  const textChanged = () => {
    setEmail(textRef.current.value);
  };

  return (
    <>
      <Margin height="114" />
      <Typography buttonText>사용하는 이메일을 알려주세요</Typography>
      <Margin height="34" />
      <StyledTextarea
        ref={textRef}
        placeholder="입력해주세요"
        maxLength="30"
        onChange={textChanged}
      />
      <Margin height="208" />
      <Button bgColor={email === "" ? "gray" : "mainRed"}>다음</Button>
    </>
  );
};

export default EmailInput;
