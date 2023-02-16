import MobileLayout from "../../component/MobileLayout/MobileLayout";
import Typography from "../../component/Typography/Typhography";
import styled from "styled-components";
import ThemeKinds from "./component/ThemeKinds";

const TitleWrapper = styled.div`
  width: 100%;
  height: 70px;
  margin-top: 64px;
  padding-left: 40px;
`;

const CategoryChoice = () => {
  return (
    <>
      <MobileLayout bar $darkShadow>
        <TitleWrapper>
          <Typography $mainTitle>
            필요한 테마 한가지를 <br />
            골라주세요
          </Typography>
        </TitleWrapper>
        <ThemeKinds />
      </MobileLayout>
    </>
  );
};

export default CategoryChoice;
