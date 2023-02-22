import React from "react";
import styled from "styled-components";
import d3 from "./imgs/i3.png";
import IconWrapper from "../IconWrapper";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const D3 = () => {
  return (
    <IconWrapper>
      <StyledImage src={d3} />
    </IconWrapper>
  );
};

export default D3;
