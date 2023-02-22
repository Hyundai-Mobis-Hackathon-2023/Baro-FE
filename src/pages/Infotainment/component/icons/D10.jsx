import React from "react";
import styled from "styled-components";
import d10 from "./imgs/i10.png";
import IconWrapper from "../IconWrapper";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const D10 = ({ currentIndex, setCurrentIndex }) => {
  const buttonClicked = () => {
    setCurrentIndex(10);
  };
  return (
    <IconWrapper>
      <StyledImage src={d10} onClick={buttonClicked} />
    </IconWrapper>
  );
};

export default D10;
