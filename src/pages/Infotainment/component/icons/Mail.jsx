import React from "react";
import styled from "styled-components";
import mail from "./imgs/mail.png";
import IconWrapper from "../IconWrapper";

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Mail = () => {
  return (
    <IconWrapper>
      <StyledImage
        src={mail}
        onClick={() => window.open("https://www.google.com/gmail/about/")}
      />
    </IconWrapper>
  );
};

export default Mail;
