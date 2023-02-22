import React from "react";
import styled from "styled-components";
import d17 from "./imgs/i17.png";
import IconWrapper from "../IconWrapper";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const D17 = () => {
  return (
    <IconWrapper>
      <StyledImage src={d17} />
    </IconWrapper>
  );
};

export default D17;
