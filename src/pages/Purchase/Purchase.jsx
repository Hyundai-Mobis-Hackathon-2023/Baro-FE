import MobileLayout from "../../component/MobileLayout/MobileLayout";
import {IoIosArrowBack} from "react-icons/io"
import styled from "styled-components";
import Typography from "../../component/Typography/Typhography";
import Margin from "../../component/Margin/Margin";
import Receipt from "./component/Receipt";
import Button from "../../component/Button/Button";
import { useState } from "react";

const Wrapper = styled.div`
    width: 100%;
    height:auto;
    margin-left:32px;
    margin-top: 56px;
`
const TitleWrapper = styled.div`
    width: 100%;
    height: auto;
    margin-left: 20px;
    margin-top: 36px;
    margin-bottom: 40px;
`


const Purchase = () => {

    //예약자, 연락처 state
    const [userName,setUserName] = useState("나문희");
    const [userNumber,setUserNumber] = useState("010-0000-0000");


    return(<>
    <MobileLayout color="mainRed" >
        <Wrapper>
            <IoIosArrowBack size="35" color="white"/>
            <TitleWrapper>
                <Typography mainTitle color="white" style={{fontFamily: 'pretendard', fontWeight:"700"}}>확인 및 결제</Typography>    
                <Margin width="100" height="13" />
                <Typography contentText color="white">입력하신 대여 내용을 <br/>대여 시간 추가 비용을 확인해주세요.</Typography>
            </TitleWrapper>
            <Receipt userName ={userName} userNumber={userNumber}/>
        </Wrapper>
        <Margin width="100" height="51" />
        <Button bgColor='black'>
          결제하기
        </Button>
       
    </MobileLayout></>)
}


export default Purchase;
