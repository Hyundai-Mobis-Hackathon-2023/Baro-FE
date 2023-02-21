import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import Welcome from "./component/Welcome";
// import axios from "axios";
import InfotainmentLayout from "../../component/InfotainmentLayout/InfotainmentLayout";
import Flex from "../../component/Flex/Flex";
import Map from "./component/Map";

const Infortainment = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(function () {
      setVisible(false);
    }, 2000);
  }, []);

  return (
    <InfotainmentLayout>
      <Map />
    </InfotainmentLayout>
  );
};
// <Welcome visible={visible} />

export default Infortainment;
