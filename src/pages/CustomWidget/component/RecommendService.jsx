import styled from "styled-components";
import { TbDownload } from "react-icons/tb";
import React, { useState } from "react";
import Margin from "../../../component/Margin/Margin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../../component/Button/Button";
import { useNavigate } from "react-router-dom";
import { Toast } from "./../../../component/Toast/Toast";
import axios from "axios";

const KindName = styled.div`
  font-family: "pretendard-bold";
  font-size: 16px;
  line-height: 19.09px;
  display: flex;
  width: 100%;
  margin: 8px;
  align-items: center;
  text-align: center;
  justify-content: space-between;
`;

const SectionWrapper = styled.div`
  width: 322px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
`;

const EachWidgetWrapper = styled.div`
  width: 125px;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 18px;
  margin-bottom: 0px;
`;

const ImgSection = styled.div`
  width: 125px;
  height: 125px;
  border-radius: 24px;
  background: linear-gradient(317.7deg, #000000 0%, #ffffff 105.18%), #ebecf0;
  background-blend-mode: soft-light, normal;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ServiceImg = styled.img`
  width: 125px;
  height: 125px;
  background: linear-gradient(
      140.1deg,
      #f2f2f4 7.1%,
      rgba(242, 242, 244, 0) 92.97%
    ),
    linear-gradient(
      90deg,
      rgba(253, 132, 220, 0.2) 3.12%,
      rgba(127, 214, 250, 0.2) 100%
    );
  border: 1px solid;
  border-radius: 30px;
  border: 3px solid
    ${(props) => (props.borderCheck === true ? "#7914FB" : "#F2F2F4")};
  object-fit: cover;
  transition: 0.5s;
`;

const StyledContainer = styled(ToastContainer)`
  .Toastify__toast {
    background: rgba(168, 172, 181, 0.8);
    border-radius: 14px;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    color: #ffffff;
  }
  .toast-alert {
    width: 339px;
    height: 47px;
  }
`;

const ButtonPositon = styled.div`
  width: 390px;
  display: flex;
  justify-content: center;
  position: fixed;
  left: 50%;
  bottom: 72px;
  transform: translate(-50%, 0);
`;

//????????? ?????? ?????? ????????? ??????
var plusServiceArr = [];

//?????? ????????? ?????? ???
function Widget({ eachWidget, setLength, checking }) {
  const [installCheck, setInstallCheck] = useState(false);

  const Install = () => {
    if (checking === true) {
      setInstallCheck(!installCheck);

      //????????? ?????????
      if (
        plusServiceArr.indexOf(eachWidget.key) == -1 &&
        installCheck === false
      ) {
        plusServiceArr.push(eachWidget.key);
      }
      //????????? ???????????? ??????
      else if (
        plusServiceArr.indexOf(eachWidget.key) !== -1 &&
        installCheck === true
      ) {
        plusServiceArr.splice(plusServiceArr.indexOf(eachWidget.key), 1);
      }
      setLength(plusServiceArr.length);
    }

    console.log(installCheck, plusServiceArr);
  };

  return (
    <>
      <EachWidgetWrapper onClick={Install}>
        <ImgSection>
          <ServiceImg src={eachWidget.img} borderCheck={installCheck} />
        </ImgSection>
        <KindName>
          {eachWidget.name}
          <TbDownload style={{ marginBottom: "5px" }} size="18" />
        </KindName>
      </EachWidgetWrapper>
    </>
  );
}

//map?????? ???????????? ??????
const RecommendService = (props) => {
  const navigate = useNavigate();
  const [check, setCheck] = useState(false);
  const [length, setLength] = useState(0);
  const [resultArray, setResultArray] = useState([]);

  const ClickSelect = () => {
    setCheck(!check);
  };
  const ClickCheck = () => {
    setResultArray(plusServiceArr);
    axios
      .post(
        `${process.env.REACT_APP_API}/custom/setCustomList`,
        { customNumberList: plusServiceArr },
        {
          headers: {
            Authorization: `${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((r) => {
        console.log(r);
        localStorage.setItem("customRecord", r.data.result.customRecord);
        navigate("/buy-rental-choice");
        Toast("????????? ?????????????????????.");
      });
  };

  return (
    <>
      <SectionWrapper>
        {props.RecomServices.map((widget) => (
          <Widget
            key={widget.key}
            eachWidget={widget}
            setLength={setLength}
            checking={check}
          />
        ))}
      </SectionWrapper>
      <StyledContainer
        position="bottom-center" // ?????? ?????? ??????
        autoClose={1500} // ?????? off ??????
        hideProgressBar={true} // ??????????????? ??????
        limit={1} // ?????? ?????? ??????
        closeOnClick={false}
        closeButton={false}
        style={{
          width: "339px",
          height: "47px",
          marginBottom: "140px",
          borderRadius: "14px",
        }}
      />
      <ButtonPositon>
        {check === false ? (
          <>
            <Button small bgColor="purple" onClick={ClickSelect}>
              ??????
            </Button>
            <Margin width="12" height="10" />
            <Button small bgColor="gray" onClick={ClickCheck}>
              ??????
            </Button>
          </>
        ) : (
          <>
            <Button
              small
              bgColor={plusServiceArr.length >= 1 ? "purple" : "gray"}
              onClick={() => {
                ClickCheck();
              }}
            >
              ??????
            </Button>
          </>
        )}
      </ButtonPositon>
    </>
  );
};

export default RecommendService;
