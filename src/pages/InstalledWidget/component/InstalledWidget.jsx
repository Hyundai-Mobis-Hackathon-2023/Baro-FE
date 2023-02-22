import React, { useState, useEffect } from "react";
import MobileLayout from "../../../component/MobileLayout/MobileLayout";
import KindWidgets from "./KindWidgets";
import Typography from "../../../component/Typography/Typhography";
import { ReactComponent as Header } from "./header.svg";
import styled from "styled-components";
import { GoPlus } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import Margin from "../../../component/Margin/Margin";
import Flex from "./../../../component/Flex/Flex";
import axios from "axios";
import d1 from "../images/d1.png";
import d2 from "../images/d2.png";
import d3 from "../images/d3.png";
import d4 from "../images/d4.png";
import d5 from "../images/d5.png";

const HeaderSvg = styled(Header)`
  position: absolute;
  top: 0;
  filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.1));
`;

const HeaderWrapper = styled(Flex)`
  width: 390px;
  z-index: 2;
  background: #f5f5f5;
`;

const TitleWrapper = styled(Flex)`
  width: 310px;
  margin-top: 80px;
  z-index: 3;
  justify-content: space-between;
`;

const TitleTextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PlusButton = styled.button`
  width: 48px;
  height: 48px;
  background: rgba(166, 111, 229, 0.54);
  border-radius: 12px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  cursor: pointer;
`;

const KindText = styled.div`
  font-family: "pretendard";
  font-size: 20px;
  font-weight: 600;
  width: 53px;
  height: auto;
  padding-bottom: 2px;
  border-bottom: 2px solid black;
  margin-left: 40px;
  z-index: 3;
  cursor: pointer;
`;

const KindTextWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding-bottom: 38px;
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

//값을 받을때, Widgets과 종류에 대한 값 두개씩을 줘야함.
//ex) ["기본",[{name: "메일",img:"aa"},{name: "이름이름",img:"aa"},{name: "메일",img:"aa"},{name: "메일",img:"aa"}]]

const InstalledWidget = () => {
  const navigate = useNavigate();
  const [allList, setAllList] = useState([]);
  const [list, setList] = useState([]);
  const [kind, setKind] = useState("베이직");
  const [CustomWidgets, setCustomWidgets] = useState([]);

  const BasicWidgets = [
    { name: "차량 속도계", img: d1 },
    { name: "날씨", img: d2 },
    { name: "캘린더", img: d3 },
    { name: "음악", img: d4 },
    { name: "차량 온도", img: d5 },
  ];

  function CurrentWidgets(props) {
    const current = props.current;
    if (current === "커스텀") {
      return (
        <>
          <KindWidgets Widgets={CustomWidgets} />
        </>
      );
    } else if (current === "베이직") {
      return (
        <>
          <KindWidgets Widgets={BasicWidgets} />
        </>
      );
    }
  }

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
    const customList = allList.filter((a) => list.indexOf(a.infoNumber) !== -1);
    const temp = customList.map((c) => ({
      ...CustomWidgets,
      name: c.name,
      img: c.imageUrl,
    }));
    setCustomWidgets(temp);
  }, [allList]);

  function basicClick() {
    setKind("베이직");
  }
  function customClick() {
    setKind("커스텀");
  }

  return (
    <MobileLayout>
      <HeaderWrapper flexCenter column>
        <HeaderSvg />
        <TitleWrapper flexCenter>
          <TitleTextWrapper>
            <Typography mainTitle>
              <span style={{ fontFamily: "pretendard-medium" }}>
                다양한 인포테인먼트를
              </span>
              <br />
              나만의 스타일로
            </Typography>
          </TitleTextWrapper>
          <PlusButton
            onClick={() => {
              navigate("/custom-widget");
            }}
          >
            <GoPlus size="28" color="#9042EA" />
          </PlusButton>
        </TitleWrapper>
        <Margin height="74" />
        <Typography
          contentText
          color="white"
          style={{ fontSize: "20px", zIndex: "3" }}
        >
          기본 세팅은 다음과 같아요
        </Typography>
        <MdKeyboardArrowDown
          size="36px"
          color="#ffffff"
          style={{ zIndex: "3" }}
        ></MdKeyboardArrowDown>
        <Margin height="56" />
        <KindTextWrapper>
          <KindText
            style={{
              color: kind === "베이직" ? "#E53E3E" : "#1B1313",
              borderBlockColor: kind === "베이직" ? "#E53E3E" : "#1B1313",
            }}
            onClick={basicClick}
          >
            베이직
          </KindText>
          <KindText
            style={{
              color: kind === "커스텀" ? "#E53E3E" : "#1B1313",
              borderBlockColor: kind === "커스텀" ? "#E53E3E" : "#1B1313",
              marginLeft: "24px",
            }}
            onClick={customClick}
          >
            커스텀
          </KindText>
        </KindTextWrapper>
      </HeaderWrapper>

      <ScrollWrapper>
        <Margin height="381" />
        <CurrentWidgets current={kind} />
      </ScrollWrapper>
    </MobileLayout>
  );
};

export default InstalledWidget;
