import React from "react";
import styled from "styled-components";
import Margin from "../../component/Margin/Margin";
import Lottie from "lottie-react";
import CarShopping from "../../assets/svgs/carShopping.json";
import Typography from "../../component/Typography/Typhography";
import MobileLayout from "../../component/MobileLayout/MobileLayout";
import Button from "../../component/Button/Button";
import Flex from "../../component/Flex/Flex";
import { useNavigate } from "react-router-dom";

const InnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
`;

const StyledLottie = styled(Lottie)`
  width: 300px;
  height: 300px;
`;

const ButtonWrapper = styled(Flex)`
  position: fixed;
  bottom: 72px;
  width: 336px;
  justify-content: space-between;
`;

const BuyRentalChoice = ({ currentPage, setCurrentPage }) => {
  const navigate = useNavigate();

  return (
    <MobileLayout darkShadow>
      <InnerWrapper>
        <StyledLottie animationData={CarShopping} />
        <Margin height="50" />
        <Typography mainTitle style={{ textAlign: "center" }}>
          곧 당신의 차량을
          <br />
          만날 수 있어요
        </Typography>
        <Margin height="50" />
      </InnerWrapper>
      <ButtonWrapper flexCenter>
        <Button middle bgColor="black" onClick={() => navigate("/rental")}>
          대여하기
        </Button>
        <Button middle bgColor="black" onClick={() => navigate("/buy")}>
          구매하기
        </Button>
      </ButtonWrapper>
    </MobileLayout>
  );
};

export default BuyRentalChoice;
