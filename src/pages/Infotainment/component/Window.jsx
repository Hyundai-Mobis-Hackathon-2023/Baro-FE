import React from "react";
import styled from "styled-components";
import Flex from "./../../../component/Flex/Flex";

const OutWrapper = styled(Flex)`
  width: 100vw;
  height: 100vh;
  z-index: 5;
  position: fixed;
  top: 0;
  align-items: center;
  justify-content: center;
`;

const WindowWrapper = styled.object`
  position: fixed;
  width: 1765px;
  height: 600px;
  background-color: #ffffff;
  border-radius: 20px;
`;

const Window = () => {
  return (
    <OutWrapper>
      <WindowWrapper
        type="text/html"
        data="https://www.youtube.com"
      ></WindowWrapper>
    </OutWrapper>
  );
};

export default Window;
