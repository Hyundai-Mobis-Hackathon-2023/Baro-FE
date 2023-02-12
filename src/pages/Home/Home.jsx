import Button from "../../component/Button/Button";
import MobileLayout from "../../component/MobileLayout/MobileLayout";
import Typography from "../../component/Typography/Typhography";
import Margin from "./../../component/Margin/Margin";

const Home = () => {
  return (
    <MobileLayout bar>
      <Margin height="30" />
      <Typography mainTitle>이건 메인 타이틀 우히히</Typography>
      <Margin height="30" />
      <Button bgColor="black">시작하기</Button>
      <Margin height="30" />
      <Button bgColor="mainRed">선택</Button>
    </MobileLayout>
  );
};

export default Home;
