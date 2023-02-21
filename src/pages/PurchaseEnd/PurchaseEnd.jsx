import React, { useEffect } from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import Flex from "../../component/Flex/Flex";
import MobileLayout from "../../component/MobileLayout/MobileLayout";
import car from "../../assets/svgs/car.json";
import success from "../../assets/svgs/success.json";
import Typography from "../../component/Typography/Typhography";
import Margin from "../../component/Margin/Margin";
import { useNavigate } from "react-router-dom";

const StyledFlex = styled(Flex)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
`;

const PurchaseEnd = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(function () {
      navigate("/");
    }, 7000);
  });

  return (
    <MobileLayout color="mainRed">
      <StyledFlex flexCenter column>
        <Lottie
          animationData={car}
          style={{
            position: "relative",
            top: "100px",
          }}
        />
        <Typography
          buttonText
          color="white"
          style={{
            textAlign: "center",
            position: "relative",
            top: "-20px",
            lineHeight: "30px",
          }}
        >
          결제가 완료되었습니다.
          <br />
          잠시 후, 차량이 도착할 예정입니다.
        </Typography>
        <Lottie
          style={{
            width: "150px",
            height: "150px",
          }}
          animationData={success}
          loop={false}
        />
        <Margin height="100" />
      </StyledFlex>
    </MobileLayout>
  );
};

export default PurchaseEnd;
