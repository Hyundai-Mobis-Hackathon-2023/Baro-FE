import React from "react";
import styled from "styled-components";
import netflix from "./imgs/netflix.png";
import IconWrapper from "../IconWrapper";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Netflix = () => {
  return (
    <IconWrapper>
      <StyledImage
        src={netflix}
        onClick={() => window.open("https://www.netflix.com/kr/")}
      />
    </IconWrapper>
  );
};

export default Netflix;
