import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import Welcome from "./component/Welcome";
// import axios from "axios";
import Flex from "../../component/Flex/Flex";
import Map from "./component/Map";

const InfortainmentWrapper = styled(Flex)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  flex-wrap: wrap;
  background: linear-gradient(90.79deg, #5677b9 -2.12%, #90c4c9 104.8%);
`;

const Infortainment = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(function () {
      setVisible(false);
    }, 2000);
  }, []);

  return (
    <InfortainmentWrapper flexCenter column>
      <Map />
    </InfortainmentWrapper>
  );
};
// <Welcome visible={visible} />

export default Infortainment;
