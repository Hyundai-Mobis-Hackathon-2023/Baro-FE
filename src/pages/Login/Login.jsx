import MobileLayout from "../../component/MobileLayout/MobileLayout";
import Typography from "../../component/Typography/Typhography";
import styled from "styled-components";
import Margin from "../../component/Margin/Margin";
import Button from "../../component/Button/Button";
import { useNavigate } from "react-router-dom";

const TitleWrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 131px;
  padding-left: 40px;
`;
//새로운 분이라면 / 회원가입에 대한 정렬
const SmallTitleWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding-left: 39px;
  margin-top: 16px;
`;

const IdInput = styled.input`
  width: 349px;
  height: 64px;
  background: rgba(235, 235, 235, 0.42);
  border: 1.5px solid #e2e2e2;
  border-radius: 15px;
  padding-left: 24px;
  &::placeholder {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 17.5px;
    line-height: 21px;
    color: rgba(165, 165, 165, 0.8);
  }
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 17.5px;
  line-height: 21px;
`;

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <MobileLayout loginShadow>
        <TitleWrapper>
          <Typography mainTitle>
            만나서 <br />
            반가워요
          </Typography>
        </TitleWrapper>
        <SmallTitleWrapper>
          <Typography smallTitle color="darkGray">
            새로운 분이라면 /{" "}
          </Typography>
          <Typography
            smallTitle
            color="mainRed"
            onClick={() => navigate("/new-user")}
            style={{ cursor: "pointer" }}
          >
            &nbsp;회원가입
          </Typography>
        </SmallTitleWrapper>
        <Margin width="100" height="41" />
        <IdInput type="text" placeholder="username" />
        <Margin width="100" height="6" />
        <IdInput type="password" placeholder="password" />
        <SmallTitleWrapper>
          <Typography smallTitle color="darkGray">
            비밀번호를 잊으셨나요?
          </Typography>
        </SmallTitleWrapper>
        <Margin width="100" height="59" />
        <Button bgColor="black" onClick={() => navigate("/start")}>
          시작하기
        </Button>
      </MobileLayout>
    </>
  );
};

export default Login;
