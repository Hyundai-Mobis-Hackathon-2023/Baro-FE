import MobileLayout from "../../component/MobileLayout/MobileLayout";
import styled from "styled-components";
import InstalledService from "./component/InstalledService";
import RecommendService from "./component/RecommendService";
import Flex from "../../component/Flex/Flex";
import Margin from "../../component/Margin/Margin";
import { ReactComponent as PurpleSection } from "./component/purpleSection.svg";
import { useState } from "react";
import Typography from "../../component/Typography/Typhography";

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

const InstallServices = [
  {
    key: 1,
    name: "ss",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhfZpuS5FbnATyFKxTijKMkh0rZiqQfmkS3g&usqp=CAU",
  },
  {
    key: 2,
    name: "ss2",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhfZpuS5FbnATyFKxTijKMkh0rZiqQfmkS3g&usqp=CAU",
  },
  {
    key: 3,
    name: "ss3",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhfZpuS5FbnATyFKxTijKMkh0rZiqQfmkS3g&usqp=CAU",
  },
  {
    key: 4,
    name: "ss4",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhfZpuS5FbnATyFKxTijKMkh0rZiqQfmkS3g&usqp=CAU",
  },
  {
    key: 5,
    name: "ss5",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhfZpuS5FbnATyFKxTijKMkh0rZiqQfmkS3g&usqp=CAU",
  },
  {
    key: 6,
    name: "ss",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhfZpuS5FbnATyFKxTijKMkh0rZiqQfmkS3g&usqp=CAU",
  },
];

const CustomWidget = () => {
  const [arr, setArr] = useState([]);
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
          <RecommendService RecomServices={InstallServices} getArr={getArr} />
          <Margin height="150" />
        </BackWrapper>
      </ScrollWrapper>
    </MobileLayout>
  );
};

export default CustomWidget;
