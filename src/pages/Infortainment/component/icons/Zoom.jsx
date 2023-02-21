import React from "react";
import styled from "styled-components";
import zoom from "./imgs/zoom.png";
import IconWrapper from "../IconWrapper";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Zoom = () => {
  return (
    <IconWrapper>
      <StyledImage src={zoom} />
    </IconWrapper>
  );
};

export default Zoom;
