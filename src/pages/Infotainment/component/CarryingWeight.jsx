import styled from "styled-components";
import Flex from "../../../component/Flex/Flex";
import { MdArrowBackIos } from "react-icons/md";
import { RiShoppingCart2Line } from "react-icons/ri";
import Margin from "../../../component/Margin/Margin";
import { MdQrCodeScanner } from "react-icons/md";

const TrayWrapper = styled(Flex)`
  width: 600px;
  height: 600px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px 0px;
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const WidgetTitle = styled.div`
  font-family: "pretendard-semibold";
  font-size: 32px;
  color: #ffffff;
  margin-top: 55px;
`;

const ImgSection = styled.img`
  width: 400px;
  height: auto;
`;

const CarryingWeight = ({ setCurrentIndex }) => {
  const buttonClicked = () => {
    setCurrentIndex(-1);
  };
  return (
    <>
      <TrayWrapper>
        <TitleWrapper>
          <MdArrowBackIos
            size="40px"
            color="#FFFFFF"
            style={{ marginTop: "40px", marginLeft: "40px", cursor: "pointer" }}
            onClick={buttonClicked}
          />
          <WidgetTitle>적재량</WidgetTitle>
          <Margin width="80" />
        </TitleWrapper>
        <ImgSection src="https://i.ibb.co/t3PfbFs/image.png" />
      </TrayWrapper>
    </>
  );
};

export default CarryingWeight;
