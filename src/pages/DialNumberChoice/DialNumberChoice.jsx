import MobileLayout from "../../component/MobileLayout/MobileLayout";
import Typography from "../../component/Typography/Typhography";
import { useState } from "react";
import styled from "styled-components";
import Margin from "../../component/Margin/Margin";
import Button from "../../component/Button/Button";
import NumberKnob from "./component/NumberKnob";
import { useNavigate } from "react-router-dom";

const TitleWrapper = styled.div`
  width: 100%;
  height: 70px;
  margin-top: 64px;
  padding-left: 40px;
`;

const SubTitleWrapper = styled(Typography)`
  width: 92px;
  height: 31px;
  border-radius: 15px;
  background: rgba(198, 82, 82, 0.8);
  ${(props) => props.theme.flex.flexCenter};
`;

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 106px;
`;

const DialNumberChoice = () => {
  const [maxNumber, setMaxNumber] = useState(1);
  const navigate = useNavigate();

  return (
    <MobileLayout bar darkShadow>
      <TitleWrapper>
        <Typography mainTitle>
          탑승 가능 인원 수를 <br />
          입력해주세요
        </Typography>
      </TitleWrapper>
      <Margin height="72" />
      <SubTitleWrapper contentText color="white">
        승차 인원
      </SubTitleWrapper>
      <Margin height="10" />
      <Typography maxNumberText color="mainRed">
        최대 {maxNumber === 0 ? 10 : maxNumber}명
      </Typography>
      <NumberKnob maxNumber={maxNumber} setMaxNumber={setMaxNumber} />
      <ButtonWrapper>
        <Button bgColor="mainRed" onClick={() => navigate("/preset/living")}>
          프리셋 보기
        </Button>
      </ButtonWrapper>
    </MobileLayout>
  );
};

export default DialNumberChoice;
