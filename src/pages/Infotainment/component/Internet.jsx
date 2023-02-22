import axios from "axios";
import { useState, useEffect } from "react";
import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";
import styled from "styled-components";
import InfotainmentLayout from "../../../component/InfotainmentLayout/InfotainmentLayout";

const Notion = () => {
  const [response, setResponse] = useState({});

  useEffect(() => {
    const NOTION_PAGE_ID = "7258456b68cd4b049aaf80415d2e158a";
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

const Internet = () => {
  return (
    <InfotainmentLayout>
      <NotionWrapper>
        <Notion />
      </NotionWrapper>
    </InfotainmentLayout>
  );
};

export default Internet;
