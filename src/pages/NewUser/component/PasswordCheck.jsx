import React, { useState, useEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";
import Button from "../../../component/Button/Button";
import Margin from "../../../component/Margin/Margin";
import Typography from "../../../component/Typography/Typhography";
import Toast from "../../../component/Toast/Toast";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

const PasswordCheck = ({
  currentPage,
  setCurrentPage,
  password,
  checkPassword,
  setCheckPassword,
}) => {
  const textRef = useRef(null);
  const navigate = useNavigate();
  const [isRightPW, setIsRightPW] = useState(false);

  const textChanged = () => {
    setCheckPassword(textRef.current.value);
  };

  const checkEnterAndSpace = (e) => {
    if (e.key === " ") e.preventDefault();
    else if (e.key === "Enter") {
      e.preventDefault();
      moveToNext();
    }
  };

  const moveToNext = () => {
    console.log(textRef.current.value);
    axios
      .post(`${process.env.REACT_APP_API}/user/signup/getRepassword`, {
        rePassword: textRef.current.value,
        userIdx: parseInt(localStorage.getItem("userIdx")),
      })
      .then((r) => {
        if (!r.data.result) {
          navigate("/");
          Toast("회원가입이 완료되었습니다.");
        } else {
          Toast(r.data.message);
        }
      });
  };

  useEffect(() => {
    setIsRightPW(password === checkPassword);
  }, [password, checkPassword, setIsRightPW]);

  return (
    <StyledMotion
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Margin height="114" />
      <Typography buttonText>비밀번호를 한번 더 확인해주세요</Typography>
      <Margin height="34" />
      <StyledTextarea
        autoFocus
        ref={textRef}
        placeholder="입력해주세요"
        maxLength="30"
        onChange={textChanged}
        onKeyPress={checkEnterAndSpace}
      />
      <Margin height="170" />
      <Typography alertText color="alertRed">
        {isRightPW || checkPassword === ""
          ? "ㅤ"
          : "일치하지 않습니다. 다시 한번 확인해주세요."}
      </Typography>
      <Margin height="26" />
      <Button
        bgColor={checkPassword === "" ? "gray" : "mainRed"}
        onClick={moveToNext}
      >
        다음
      </Button>
    </StyledMotion>
  );
};

export default PasswordCheck;
