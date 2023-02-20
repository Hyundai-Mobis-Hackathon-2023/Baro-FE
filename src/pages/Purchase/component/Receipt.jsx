import styled, { css } from "styled-components";
import Typography from "../../../component/Typography/Typhography";
import Margin from "../../../component/Margin/Margin";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import Flex from "../../../component/Flex/Flex";

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

const RentalBox = styled.div`
  width: 310px;
  height: 197px;
  background: #d9d9d9;
  border-radius: 6px;
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

const Receipt = ({ userName, userNumber, selectedWay }) => {
  return (
    <ReceiptWrapper flexCenter column>
      <ReceiptTitle smallTitle style={{ fontFamily: "pretendard-bold" }}>
        의료용 서비스 PBV
      </ReceiptTitle>
      <Margin height="40" />
      <ReceiptTitle alertText>
        {selectedWay === "buy" ? "구매 상세내역" : "예약 상세내역"}
      </ReceiptTitle>
      <StyledHr />

      <PaymentInfoWrapper flexCenter justify="space-between">
        <Typography contentText color="darkGray">
          {selectedWay === "buy" ? "구매자" : "예약자"}
        </Typography>
        <Typography contentText>{userName}</Typography>
      </PaymentInfoWrapper>
      <PaymentInfoWrapper flexCenter justify="space-between">
        <Typography contentText color="darkGray">
          연락처
        </Typography>
        <Typography contentText>{userNumber}</Typography>
      </PaymentInfoWrapper>
      <Margin height="32" />
      {selectedWay === "buy" ? (
        ""
      ) : (
        <>
          <ReceiptTitle alertText>대여시간 안내</ReceiptTitle>
          <StyledHr />
          <RentalBox />
          <Margin height="40" />
        </>
      )}

      <ReceiptTitle alertText>결제 정보를 확인해주세요.</ReceiptTitle>
      <Margin height="20" />
      {selectedWay === "buy" ? (
        <>
          <PaymentInfoWrapper flexCenter justify="space-between">
            <Typography contentText color="darkGray">
              구매 요금
            </Typography>
            <Typography contentText>10,000,000원</Typography>
          </PaymentInfoWrapper>
          <PaymentInfoWrapper flexCenter justify="space-between">
            <Typography contentText color="darkGray">
              수수료
            </Typography>
            <Typography contentText>2,000,000원</Typography>
          </PaymentInfoWrapper>
          <StyledHr gray />
          <PaymentInfoWrapper flexCenter justify="space-between">
            <Typography contentText color="darkGray">
              최종 요금
            </Typography>
            <Typography contentText>
              <span style={{ color: "#559FF3" }}>12,000,000</span>원
            </Typography>
          </PaymentInfoWrapper>
        </>
      ) : (
        <>
          <PaymentInfoWrapper flexCenter justify="space-between">
            <Typography contentText color="darkGray">
              대여요금
            </Typography>
            <Typography>190,000원</Typography>
          </PaymentInfoWrapper>
          <PaymentInfoWrapper flexCenter justify="space-between">
            <Typography contentText color="darkGray">
              이동요금
            </Typography>
            <Typography>6,000원</Typography>
          </PaymentInfoWrapper>
          <StyledHr gray />
          <PaymentInfoWrapper flexCenter justify="space-between">
            <Typography contentText color="darkGray">
              최종 요금
            </Typography>
            <Typography>
              <span style={{ color: "#559FF3" }}>196,000</span>원
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
            대여시간 수수료 부과 정책에 따라 추가비용이 발생한다는 점<br />
            유의하시길 바랍니다. 대여 전 위의 안내사항을 확인해주세요.
          </SmallText>
        </CautionWrapper>
      )}
    </ReceiptWrapper>
  );
};

export default Receipt;
