import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Welcome from "./component/Welcome";
// import axios from "axios";
import InfotainmentLayout from "../../component/InfotainmentLayout/InfotainmentLayout";
import Flex from "../../component/Flex/Flex";
import MapInfo from "./component/MapInfo";
import CarTemper from "./component/CarTemper";
import Music from "./component/Music";
import Calendar from "./component/Calendar";
import AppTray from "./component/AppTray";
import Weather from "./component/Weather";
import { NotionRenderer } from "react-notion-x";
import axios from "axios";

const Notion = () => {
  const [response, setResponse] = useState({});

  useEffect(() => {
    const NOTION_PAGE_ID = "9f692857e4d544a7b1026e17461fb6c9";
    axios
      .get(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(({ data }) => {
        setResponse(data);
      });
  }, []);

  return (
    Object.keys(response).length && (
      <NotionRenderer blockMap={response} fullPage={true} />
    )
  );
};

const NotionWrapper = styled.div`
  width: 1720px;
  height: 598px;
  border-radius: 20px;
  background-color: white;
  filter: drop-shadow(0px 11px 13px rgba(0, 0, 0, 0.25));

  overflow: auto;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
`;

const Infotainment = () => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setVisible(false);
    }, 2000);
  }, []);

  return (
    <InfotainmentLayout>
      <Welcome visible={visible} />
      <MapInfo />
      <CarTemper />
      <Calendar />
      <Music />
      <Weather />
      <AppTray />
    </InfotainmentLayout>
  );
};

export default Infotainment;
