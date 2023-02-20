import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import MobileLayout from "../../component/MobileLayout/MobileLayout";
import Typography from "../../component/Typography/Typhography";
import Margin from "../../component/Margin/Margin";
import Receipt from "./component/Receipt";
import Button from "../../component/Button/Button";
import theme from "../../assets/theme/Theme";
import { MdArrowBackIos } from "react-icons/md";
import axios from "axios";

const HeaderWrapper = styled.div`
  width: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.mainRed};
  z-index: 1;
  position: fixed;
  top: 0;
`;

const IconWrapper = styled.div`
  width: 100%;
  padding-left: 32px;
  margin-top: 56px;
`;

const TitleWrapper = styled.div`
  width: 100%;
  padding-left: 40px;
  margin-top: 36px;
  margin-bottom: 40px;
`;

const ScrollWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  height: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  overflow-y: scroll;
  overflow-x: hidden;
`;

const Purchase = () => {
  const params = useParams();
  const navigate = useNavigate();
  const selectedWay = params.selectedWay;
  //예약자, 연락처 state
  const [userName, setUserName] = useState("나문희");
  const [userNumber, setUserNumber] = useState("010-0000-0000");
  const { category, categoryEng } = theme;
  const [curCategory, setCurCategory] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/category/getSelectInfo`, {
        headers: {
          Authorization: `${localStorage.getItem("accessToken")}`,
        },
      })
      .then((r) => {
        console.log(r.data);
        setCurCategory(r.data.result.categoryName);
      });
  }, []);

  return (
    <MobileLayout color="mainRed">
      <HeaderWrapper>
        <IconWrapper>
          <MdArrowBackIos
            size="30px"
            color="white"
            onClick={() => navigate(-1)}
            style={{ cursor: "pointer" }}
          />
        </IconWrapper>
        <TitleWrapper>
          <Typography
            mainTitle
            color="white"
            style={{ fontFamily: "pretendard", fontWeight: "700" }}
          >
            확인 및 결제
          </Typography>
          <Margin height="13" />
          <Typography contentText color="white">
            {selectedWay === "buy"
              ? "입력하신 구매 내용과"
              : "입력하신 대여 내용과"}
            <br />
            {selectedWay === "buy"
              ? "구매 비용을 확인해주세요."
              : "대여 시간 추가 비용을 확인해주세요."}
          </Typography>
        </TitleWrapper>
      </HeaderWrapper>
      <ScrollWrapper>
        <Margin height="248" />
        <Receipt
          userName={userName}
          userNumber={userNumber}
          selectedWay={selectedWay}
          category={category[categoryEng.indexOf(curCategory)]}
        />
        <Margin height="51" />
        <Button bgColor="black">결제하기</Button>
        <Margin height="72" />
      </ScrollWrapper>
    </MobileLayout>
  );
};

export default Purchase;
