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
  font-family: "S-Core Dream";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  color: #ffffff;
  margin-top: 55px;
`;
const BasicText = styled.div`
  font-family: "S-Core Dream";
  font-style: normal;
  font-weight: 200;
  font-size: 32px;
  width: 100%;
  text-align: center;
  color: #fdfdfd;
`;
const Circle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CircleWrapper = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

const Purchase = ({ setCurrentIndex }) => {
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
          <WidgetTitle>결제창</WidgetTitle>
          <div style={{ marginLeft: "80px" }}> </div>
        </TitleWrapper>
        <Margin height="100" />
        <BasicText>상품을 입력해주세요.</BasicText>
        <Margin height="200" />
        <CircleWrapper>
          <Circle style={{ backgroundColor: "#FBC02D" }}>
            <RiShoppingCart2Line color="#FFFFFF" size="50" />
          </Circle>
          <Circle style={{ backgroundColor: "#115E38" }}>
            <MdQrCodeScanner color="#FFFFFF" size="50" />
          </Circle>
        </CircleWrapper>
      </TrayWrapper>
    </>
  );
};

export default Purchase;
