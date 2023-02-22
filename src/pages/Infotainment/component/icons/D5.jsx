import React from "react";
import styled from "styled-components";
import d5 from "./imgs/i5.png";
import IconWrapper from "../IconWrapper";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const D5 = () => {
  return (
    <IconWrapper>
      <StyledImage src={d5} />
    </IconWrapper>
  );
};

export default D5;
