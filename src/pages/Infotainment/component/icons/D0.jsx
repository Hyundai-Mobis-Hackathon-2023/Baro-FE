import React from "react";
import styled from "styled-components";
import d0 from "./imgs/i0.png";
import IconWrapper from "../IconWrapper";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const D0 = ({ currentIndex, setCurrentIndex }) => {
  const buttonClicked = () => {
    setCurrentIndex(0);
  };
  return (
    <IconWrapper>
      <StyledImage src={d0} onClick={buttonClicked} />
    </IconWrapper>
  );
};

export default D0;
