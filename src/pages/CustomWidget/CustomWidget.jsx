import MobileLayout from "../../component/MobileLayout/MobileLayout";
import styled from "styled-components";
import InstalledService from "./component/InstalledService";
import RecommendService from "./component/RecommendService";
import Flex from "../../component/Flex/Flex";
import Margin from "../../component/Margin/Margin";
import { ReactComponent as PurpleSection } from "./component/purpleSection.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import Typography from "../../component/Typography/Typhography";
import d1 from "../InstalledWidget/images/d1.png";
import d2 from "../InstalledWidget/images/d2.png";
import d3 from "../InstalledWidget/images/d3.png";
import d4 from "../InstalledWidget/images/d4.png";
import d5 from "../InstalledWidget/images/d5.png";

const HeaderWrapper = styled(Flex)`
  position: sticky;
  top: -293px;
  z-index: 2;
`;

const PurpleSec = styled(PurpleSection)`
  position: absolute;
  top: 0px;
  z-index: 1;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const TitleWrapper = styled.div`
  width: 314px;
  text-align: left;
  z-index: 2;
`;

const ScrollWrapper = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  overflow-y: scroll;
  overflow-x: hidden;
`;

const BackWrapper = styled.div`
  width: 390px;
  padding-top: 381px;
  min-height: calc(100vh + 295px);
  height: auto;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubTitleWrapper = styled.div`
  width: 318px;
  text-align: left;
`;

const CustomWidget = () => {
  const [arr, setArr] = useState([]);
  const [allList, setAllList] = useState([]);
  const [list, setList] = useState([]);

  const [InstallServices, setInstallServices] = useState([]);
  const [AdditionalServices, setAdditionalServices] = useState([]);

  const installServices = [
    {
      key: 26,
      name: "차량 속도계",
      img: d1,
    },
    {
      key: 27,
      name: "날씨",
      img: d2,
    },
    {
      key: 28,
      name: "캘린더",
      img: d3,
    },
    {
      key: 29,
      name: "음악",
      img: d4,
    },
    {
      key: 30,
      name: "차량 온도",
      img: d5,
    },
  ];

  useEffect(() => {
    axios
      .post(
        `${process.env.REACT_APP_API}/basic/getBasicList`,
        { basicRecord: parseInt(`${localStorage.getItem("basicRecord")}`) },
        {
          headers: {
            Authorization: `${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((r) => {
        setList(r.data.result.basicNumberList);
      });
  }, [setList]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}/info/getAllInfo`).then((r) => {
      setAllList(r.data.result.infoDummyList);
    });
  }, [list]);

  useEffect(() => {
    const additionalList = allList.filter((a) => a.infoNumber >= 19);
    const temp = additionalList.map((a) => ({
      ...AdditionalServices,
      key: a.infoNumber,
      name: a.name,
      img: a.imageUrl,
    }));
    setAdditionalServices(temp);

    const installed = allList.filter((a) => list.indexOf(a.infoNumber) !== -1);
    const temp2 = installed.map((i) => ({
      ...InstallServices,
      key: i.infoNumber,
      name: i.name,
      img: i.imageUrl,
    }));
    setInstallServices(installServices.concat(temp2));
  }, [allList]);

  const getArr = (arr) => {
    setArr(arr);
    console.log(arr);
  };

  return (
    <MobileLayout>
      <ScrollWrapper>
        <HeaderWrapper flexCenter column>
          <PurpleSec />
          <Margin height="68" />
          <TitleWrapper>
            <Typography mainTitle>
              원하는 인포테인먼트를
              <br /> 선택해주세요
            </Typography>
          </TitleWrapper>
          <Margin height="25" />
          <InstalledService Services={InstallServices} />
        </HeaderWrapper>
        <Margin height="50" />
        <BackWrapper flexCenter column>
          <SubTitleWrapper>
            <Typography buttonText>추천 서비스</Typography>
          </SubTitleWrapper>
          <Margin height="15" />
          <SubTitleWrapper>
            <Typography aiContentText color="darkGray">
              사용자가 직접 커스텀한 내부 구성에 알맞은 <br />
              인포테인먼트를 추천해줍니다.
            </Typography>
          </SubTitleWrapper>
          <RecommendService
            RecomServices={AdditionalServices}
            getArr={getArr}
          />
          <Margin height="150" />
        </BackWrapper>
      </ScrollWrapper>
    </MobileLayout>
  );
};

export default CustomWidget;
