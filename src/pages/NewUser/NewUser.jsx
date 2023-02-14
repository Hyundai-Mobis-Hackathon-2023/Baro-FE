import React from "react";
import styled from "styled-components";
import MobileLayout from "../../component/MobileLayout/MobileLayout";
import EmailInput from "./component/EmailInput";

const Background = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(224, 222, 222, 0.4) 0%,
      rgba(224, 222, 222, 0) 100%
    ),
    #ffffff;
`;

const NewUser = () => {
  return (
    <MobileLayout>
      <Background>
        <EmailInput />
      </Background>
    </MobileLayout>
  );
};

export default NewUser;
