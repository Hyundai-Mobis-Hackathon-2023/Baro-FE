/* global kakao */
import styled, { css } from "styled-components";
import Typography from "../../../component/Typography/Typhography";
import Margin from "../../../component/Margin/Margin";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import Flex from "../../../component/Flex/Flex";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useState } from "react";
import { useEffect } from "react";
const { kakao } = window;

const ReceiptWrapper = styled(Flex)`
  width: 360px;
  background: #ffffff;
  border-radius: 6px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 39px 0px;
`;

const ReceiptTitle = styled(Typography)`
  width: 310px;
  text-align: left;
`;

const StyledHr = styled.hr`
  width: 310px;
  border: 0;
  height: 2px;
  margin-top: 12px;
  margin-bottom: 16px;
  background-color: #000000;
  ${(props) =>
    props.gray &&
    css`
      margin-top: 8px;
      margin-bottom: 16px;
      height: 1px;
      background-color: #707070;
      opacity: 0.3;
    `}
`;

const PaymentInfoWrapper = styled(Flex)`
  width: 310px;
  margin-bottom: 8px;
  justify-content: space-between;
`;

const StyledMap = styled(Map)`
  width: 310px;
  height: 197px;
  border-radius: 6px;
  border: 1px solid #bdbdbd;
  margin-top: 8px;
`;

const CautionWrapper = styled.div`
  width: 310px;
  margin-top: 40px;
  display: flex;
`;

const SmallText = styled(Typography)`
  font-family: "pretendard-medium";
  font-size: 12px;
  line-height: 14px;
  color: #707070;
`;

const Receipt = ({ userName, userNumber, selectedWay, category, location }) => {
  const [latitude, setLatitude] = useState(37.44937029089704);
  const [longitude, setLongitude] = useState(126.65436049042351);

  useEffect(() => {
    let ps = new kakao.maps.services.Places();
    const placesSearchCB = function (data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        const newSearch = data[0];
        setLatitude(newSearch.y);
        setLongitude(newSearch.x);
      }
    };
    ps.keywordSearch(location, placesSearchCB);
  }, [location]);

  return (
    <ReceiptWrapper flexCenter column>
      <ReceiptTitle smallTitle style={{ fontFamily: "pretendard-bold" }}>
        PBV ????????? ?????? ??????
      </ReceiptTitle>
      <Margin height="40" />
      <ReceiptTitle alertText>
        {selectedWay === "buy" ? "?????? ????????????" : "?????? ????????????"}
      </ReceiptTitle>
      <StyledHr />

      <PaymentInfoWrapper flexCenter justify="space-between">
        <Typography contentText color="darkGray">
          {selectedWay === "buy" ? "?????????" : "?????????"}
        </Typography>
        <Typography contentText>{userName}</Typography>
      </PaymentInfoWrapper>
      <PaymentInfoWrapper flexCenter justify="space-between">
        <Typography contentText color="darkGray">
          ?????????
        </Typography>
        <Typography contentText>{userNumber}</Typography>
      </PaymentInfoWrapper>
      <Margin height="32" />

      <ReceiptTitle alertText>?????? ?????? ??????</ReceiptTitle>
      <StyledHr />
      <PaymentInfoWrapper flexCenter justify="space-between">
        <Typography contentText color="darkGray">
          ??????
        </Typography>
        <Typography contentText>{location}</Typography>
      </PaymentInfoWrapper>
      <StyledMap
        center={{ lat: latitude, lng: longitude }}
        isPanto={true}
        draggable={false}
        zoomable={false}
      >
        <MapMarker position={{ lat: latitude, lng: longitude }} />
      </StyledMap>
      <Margin height="40" />

      <ReceiptTitle alertText>?????? ????????? ??????????????????.</ReceiptTitle>
      <Margin height="20" />
      {selectedWay === "buy" ? (
        <>
          <PaymentInfoWrapper flexCenter justify="space-between">
            <Typography contentText color="darkGray">
              ?????? ??????
            </Typography>
            <Typography contentText>10,000,000???</Typography>
          </PaymentInfoWrapper>
          <PaymentInfoWrapper flexCenter justify="space-between">
            <Typography contentText color="darkGray">
              ?????????
            </Typography>
            <Typography contentText>2,000,000???</Typography>
          </PaymentInfoWrapper>
          <StyledHr gray />
          <PaymentInfoWrapper flexCenter justify="space-between">
            <Typography contentText color="darkGray">
              ?????? ??????
            </Typography>
            <Typography contentText>
              <span style={{ color: "#559FF3" }}>12,000,000</span>???
            </Typography>
          </PaymentInfoWrapper>
        </>
      ) : (
        <>
          <PaymentInfoWrapper flexCenter justify="space-between">
            <Typography contentText color="darkGray">
              ????????????
            </Typography>
            <Typography>190,000???</Typography>
          </PaymentInfoWrapper>
          <PaymentInfoWrapper flexCenter justify="space-between">
            <Typography contentText color="darkGray">
              ????????????
            </Typography>
            <Typography>6,000???</Typography>
          </PaymentInfoWrapper>
          <StyledHr gray />
          <PaymentInfoWrapper flexCenter justify="space-between">
            <Typography contentText color="darkGray">
              ?????? ??????
            </Typography>
            <Typography>
              <span style={{ color: "#559FF3" }}>196,000</span>???
            </Typography>
          </PaymentInfoWrapper>
        </>
      )}

      {selectedWay === "buy" ? (
        ""
      ) : (
        <CautionWrapper>
          <BsFillExclamationCircleFill color="E53E3E" size="12" />
          <Margin width="5" />
          <SmallText>
            ???????????? ????????? ?????? ????????? ?????? ??????????????? ??????????????? ???<br />
            ??????????????? ????????????. ?????? ??? ??????????????? ??????????????????.
          </SmallText>
        </CautionWrapper>
      )}
    </ReceiptWrapper>
  );
};

export default Receipt;
