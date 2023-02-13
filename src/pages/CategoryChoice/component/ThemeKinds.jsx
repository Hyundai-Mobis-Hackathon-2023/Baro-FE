import styled from "styled-components";
import Typography from "../../../component/Typography/Typhography";
import Internet from "./INTERNET.png";
import Margin from "../../../component/Margin/Margin";
import Button from "../../../component/Button/Button";


const ThemeImgBox = styled.div`
    width: 240px;
    height:240px;
    background-color: #FFFFFF9C;
    border-radius: 100%;
    border: 1px solid #D9D9D9;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    margin-top: 50px;
    display:flex;
    justify-content:center;
    align-items: center;
`

const ContentTextWrapper = styled.div`
    width:310px;
    height:auto;
    margin-top:20px;
`

const ButtomFix = styled.div`
    position:fixed;
    bottom: 70px;
`


const ThemeKinds = () =>{

    return(<>
    <ThemeImgBox><img src ={Internet}/></ThemeImgBox>
    <Margin width="390" height="32"/>
    <Typography mainTitle>엔터테인먼트</Typography>
    <ContentTextWrapper><Typography contentText color="darkGray">엔터테인먼트 PBV는 사용자에게 오락, 방송 등에 적합한 환경을 제공합니다. 훌륭한 사운드와 4K UHD가 마련된 공간을 만나보세요.</Typography></ContentTextWrapper>
    <ButtomFix><Button bgColor="mainRed">선택</Button></ButtomFix>
    </>)
}

export default ThemeKinds;

