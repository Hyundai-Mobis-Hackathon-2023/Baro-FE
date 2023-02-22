import React from "react";
import styled from "styled-components";
import hyundai from "./imgs/hyundai.png";
import IconWrapper from "../IconWrapper";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Hyundai = () => {
  return (
    <IconWrapper>
      <StyledImage
        src={hyundai}
        onClick={() => window.open("https://www.mobis.co.kr/kr/index.do")}
      />
    </IconWrapper>
  );
};

export default Hyundai;
