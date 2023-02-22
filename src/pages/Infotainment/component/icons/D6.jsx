import React from "react";
import styled from "styled-components";
import d6 from "./imgs/i6.png";
import IconWrapper from "../IconWrapper";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const D6 = () => {
  return (
    <IconWrapper>
      <StyledImage src={d6} />
    </IconWrapper>
  );
};

export default D6;
