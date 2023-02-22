import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import Welcome from "./component/Welcome";
// import axios from "axios";
import InfotainmentLayout from "../../component/InfotainmentLayout/InfotainmentLayout";
import Flex from "../../component/Flex/Flex";
import MapInfo from "./component/MapInfo";
import CarTemper from "./component/CarTemper";
import Music from "./component/Music";
import Calendar from "./component/Calendar";
import AppTray from "./component/AppTray";
import Weather from "./component/Weather";

const Infotainment = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(function () {
      setVisible(false);
    }, 2000);
  }, []);

  return (
    <InfotainmentLayout>
      <MapInfo />
      <CarTemper />
      <Calendar />
      <Music />
      <Weather />
      <AppTray />
    </InfotainmentLayout>
  );
};
// <Welcome visible={visible} />

export default Infotainment;
