import React from "react";
import MobileLayout from "../../../component/MobileLayout/MobileLayout";
import KindWidgets from "./KindWidgets";
import Typography from "../../../component/Typography/Typhography";
import styled from "styled-components";
import PurpleTalk from "./Purpletalk.png";
import { GoPlus } from "react-icons/go";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Title1 = styled.div`
  font-family: "pretendard";
  font-size: 26px;
  line-height: 40px;
  font-weight: 500;
`;

const Title2 = styled.div`
  font-family: "pretendard";
  font-size: 26px;
  line-height: 31.03px;
  font-weight: 700;
`;

const PlusButton = styled.button`
  width: 68px;
  height: 48px;
  background: rgba(166, 111, 229, 0.54);
  border-radius: 12px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;

const TitleWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-content: center;
  margin: 40px;
  margin-top: 80px;
`;

const TitleTextWrapper = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
`;
const KindText = styled.div`
  font-family: "pretendard";
  font-size: 20px;
  font-weight: 600;
  width: 53px;
  height: auto;
  border-bottom: 2px solid black;
  margin-left: 40px;
`;
const KindTextWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-bottom: 38px;
`;

const PurpleTalkWrapper = styled.img`
  width: 392px;
  height: 225px;
  position: relative;
  top: -60px;
`;

const WidgetWrapper = styled.div`
  position: relative;
  top: -55px;
`;

//값을 받을때, Widgets과 종류에 대한 값 두개씩을 줘야함.
//ex) ["기본",[{name: "메일",img:"aa"},{name: "이름이름",img:"aa"},{name: "메일",img:"aa"},{name: "메일",img:"aa"}]]
const BasicWidgets = [
  { name: "메일", img: "aa" },
  { name: "이름이름", img: "aa" },
  { name: "메일", img: "aa" },
  { name: "메일", img: "aa" },
];
const CustomWidgets = [
  { name: "메일2", img: "aa" },
  { name: "이름이름2", img: "aa" },
  { name: "메일2", img: "aa" },
  { name: "메일2", img: "aa" },
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

const InstalledWidget = () => {
  const navigate = useNavigate();
  const [kind, setKind] = useState("커스텀");

  function basicClick() {
    setKind("베이직");
  }
  function customClick() {
    setKind("커스텀");
  }

  return (
    <MobileLayout>
      <TitleWrapper>
        <TitleTextWrapper>
          <Title1>다양한 인포테인먼트</Title1>
          <Title2>나만의 스타일로</Title2>
        </TitleTextWrapper>
        <PlusButton
          onClick={() => {
            navigate("/custom-widget");
          }}
        >
          <GoPlus size="28" color="#9042EA" />
        </PlusButton>
      </TitleWrapper>

      <PurpleTalkWrapper src={PurpleTalk}></PurpleTalkWrapper>

      <WidgetWrapper>
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
            }}
            onClick={customClick}
          >
            커스텀
          </KindText>
        </KindTextWrapper>

        <CurrentWidgets current={kind} />
      </WidgetWrapper>
    </MobileLayout>
  );
};

export default InstalledWidget;
