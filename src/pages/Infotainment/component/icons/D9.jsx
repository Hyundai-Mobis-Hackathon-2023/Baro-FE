import React from "react";
import styled from "styled-components";
import d9 from "./imgs/i9.png";
import IconWrapper from "../IconWrapper";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const D9 = ({ currentIndex, setCurrentIndex }) => {
  const buttonClicked = () => {
    setCurrentIndex(9);
  };
  return (
    <IconWrapper>
      <StyledImage src={d9} onClick={buttonClicked} />
    </IconWrapper>
  );
};

export default D9;
