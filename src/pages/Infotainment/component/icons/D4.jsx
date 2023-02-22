import React from "react";
import styled from "styled-components";
import d4 from "./imgs/i4.png";
import IconWrapper from "../IconWrapper";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const D4 = ({ currentIndex, setCurrentIndex }) => {
  const buttonClicked = () => {
    setCurrentIndex(4);
  };
  return (
    <IconWrapper>
      <StyledImage src={d4} onClick={buttonClicked} />
    </IconWrapper>
  );
};

export default D4;
