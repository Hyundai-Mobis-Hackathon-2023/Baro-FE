import React from "react";
import styled from "styled-components";
import amazon from "./imgs/amazon.png";
import IconWrapper from "../IconWrapper";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Amazon = () => {
  return (
    <IconWrapper>
      <StyledImage
        src={amazon}
        onClick={() =>
          window.open("https://www.amazon.com/?language=ko_KR&currency=USD")
        }
      />
    </IconWrapper>
  );
};

export default Amazon;
