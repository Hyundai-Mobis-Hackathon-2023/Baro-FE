import Button from "../../component/Button/Button";
import MobileLayout from "../../component/MobileLayout/MobileLayout";
import Typography from "../../component/Typography/Typhography";

const Home = () => {
  return (
    <MobileLayout bar>
      <Typography mainTitle>이건 메인 타이틀 우히히</Typography>
      <Button bgColor="black">시작하기</Button>
      <Button bgColor="mainRed">선택</Button>
    </MobileLayout>
  );
};

export default Home;
