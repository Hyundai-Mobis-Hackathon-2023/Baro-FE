import MobileLayout from "../../component/MobileLayout/MobileLayout";
import Button from "../../component/Button/Button";
import Typography from "../../component/Typography/Typhography";
import styled from "styled-components";
import theme from "../../assets/theme/Theme";
import { useNavigate } from "react-router-dom";

const Title = styled(Typography).attrs({
  $mainTitle: "$mainTitle",
  initial: { color: theme.colors.black },
  animate: { color: theme.colors.white },
  transition: { delay: 0.6, duration: 0.7 },
})`
  position: relative;
  top: 267px;
  left: -52px;
  line-height: 1.8;
`;

const GoToAi = styled(Typography).attrs({
  $contentText: "$contentText",
  color: "white",
})`
  position: absolute;
  left: 120px;
  bottom: 40px;
  cursor: pointer;
`;

const MobileLayoutAnimation = styled(MobileLayout).attrs({
  initial: { backgroundColor: theme.colors.white },
  animate: { backgroundColor: theme.colors.mainRed },
  transition: { delay: 0.6, duration: 1.2 },
})``;

const Start = () => {
  const navigate = useNavigate();
  const btnStyle = {
    position: "absolute",
    bottom: "72px",
  };

  return (
    <MobileLayoutAnimation>
      <Title>
        당신만의 현대,
        <br /> 당신만의 PBV,
        <br /> 함께 만들어볼까요?
      </Title>

      <Button
        onClick={() => navigate("/category-choice")}
        bgColor="black"
        style={btnStyle}
      >
        시작하기
      </Button>
      <GoToAi onClick={() => navigate("/ai-start")}>
        AI의 도움을 받고 싶어요
      </GoToAi>
    </MobileLayoutAnimation>
  );
};

export default Start;

// 267
