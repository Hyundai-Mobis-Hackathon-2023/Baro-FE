import styled from "styled-components";
import Button from "../../../component/Button/Button";
import React, { Component } from "react";
import SimpleSlider from "./SimpleSlider";

const ThemeAllWapper = styled.div`
  width: 310px;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

// 선택 버튼 fixed를 하기위한 div
const ButtomFix = styled.div`
  position: fixed;
  bottom: 70px;
`;

const ThemeKinds = () => {
  return (
    <>
      <ThemeAllWapper>
        <SimpleSlider />
      </ThemeAllWapper>
      <ButtomFix>
        <Button bgColor="mainRed">선택</Button>
      </ButtomFix>
    </>
  );
};

export default ThemeKinds;
