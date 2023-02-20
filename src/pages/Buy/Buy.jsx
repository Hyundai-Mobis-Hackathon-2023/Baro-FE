import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router";
import MobileLayout from "../../component/MobileLayout/MobileLayout";
import Margin from "../../component/Margin/Margin";
import { AnimatePresence } from "framer-motion";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import InfoInput from "./component/InfoInput";
import Typography from "../../component/Typography/Typhography";
import Flex from "../../component/Flex/Flex";
import LocationInput from "./component/LocationInput";
import CheckPayment from "./component/CheckPayment";

const StyledArrow = styled(MdArrowBackIos)`
  font-size: 30px;
  position: absolute;
  top: 56px;
  left: 32px;
  cursor: pointer;
`;

const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
`;

const ProgressText = styled(Typography)`
  width: 130px;
  height: 63px;
  text-align: center;
  padding-top: 24px;
  color: ${(props) => (props.current ? props.theme.colors.mainRed : "#D4D4D4")};
  ${(props) =>
    props.current &&
    css`
      border-bottom: 2px solid #c65252;
    `}
`;

const ArrowWrapper = styled.div`
  width: 100%;
  height: 63px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  top: 119px;
`;

const Buy = () => {
  const progress = [1, 2, 3];
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [location, setLocation] = useState("");

  const backButtonClicked = () => {
    if (currentPage === 0) navigate(-1);
    else setCurrentPage(currentPage - 1);
  };

  return (
    <MobileLayout color="white">
      <Flex flexCenter column style={{ zIndex: "2" }}>
        <StyledArrow onClick={backButtonClicked} />
        <Margin height="58" />
        <Typography buttonText>구매</Typography>
        <Margin height="35" />
        <ProgressWrapper>
          {progress.map((p) => {
            return (
              <ProgressText key={p} contentText current={p - 1 === currentPage}>
                {p}단계
              </ProgressText>
            );
          })}
        </ProgressWrapper>
        <ArrowWrapper>
          <MdArrowForwardIos size="16px" color="#D4D4D4" />
          <MdArrowForwardIos size="16px" color="#D4D4D4" />
        </ArrowWrapper>
      </Flex>
      <AnimatePresence>
        {currentPage === 0 && (
          <InfoInput
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            name={name}
            setName={setName}
            number={number}
            setNumber={setNumber}
          />
        )}
        {currentPage === 1 && (
          <LocationInput
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            location={location}
            setLocation={setLocation}
          />
        )}
        {currentPage === 2 && <CheckPayment name={name} number={number} />}
      </AnimatePresence>
    </MobileLayout>
  );
};

export default Buy;
