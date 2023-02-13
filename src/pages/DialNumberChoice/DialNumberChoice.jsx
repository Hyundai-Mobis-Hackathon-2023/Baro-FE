import MobileLayout from "../../component/MobileLayout/MobileLayout";
import Typography from "../../component/Typography/Typhography";
import styled from "styled-components";
import ThemeKinds from "./component/ThemeKinds";

const DialNumberChoice = () => {
  return (
    <MobileLayout bar>
      <TitleWrapper>
        <Typography mainTitle>
          필요한 테마 한가지를 <br />
          골라주세요
        </Typography>
      </TitleWrapper>
      <ThemeKinds />
    </MobileLayout>
  );
};

export default DialNumberChoice;
