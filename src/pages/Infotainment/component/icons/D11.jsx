import React from "react";
import styled from "styled-components";
import d11 from "./imgs/i11.png";
import IconWrapper from "../IconWrapper";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const D11 = ({ currentIndex, setCurrentIndex }) => {
  const buttonClicked = () => {
    setCurrentIndex(11);
  };
  return (
    <IconWrapper>
      <StyledImage src={d11} onClick={buttonClicked} />
    </IconWrapper>
  );
};

export default D11;
