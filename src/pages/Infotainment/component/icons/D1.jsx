import React from "react";
import styled from "styled-components";
import d1 from "./imgs/i1.png";
import IconWrapper from "../IconWrapper";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const D1 = ({ currentIndex, setCurrentIndex }) => {
  const buttonClicked = () => {
    setCurrentIndex(1);
  };
  return (
    <IconWrapper>
      <StyledImage src={d1} onClick={buttonClicked} />
    </IconWrapper>
  );
};

export default D1;
