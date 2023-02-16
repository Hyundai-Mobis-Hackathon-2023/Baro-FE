import React from "react";
import MobileLayout from "../../component/MobileLayout/MobileLayout";
import KindWidgets from "./component/KindWidgets";
import Typography from "../../component/Typography/Typhography";
import styled from "styled-components";
import {GoPlus} from "react-icons/go"
import { useState, useEffect } from "react";

const Title1 = styled.div`
    font-family: 'pretendard';
    font-size: 26px;
    line-height: 40px;
    font-weight: 500;
`
const Title2 = styled.div`
    font-family: 'pretendard';
    font-size: 26px;
    line-height: 31.03px;
    font-weight: 700;
`
const IntroText = styled.div`
    font-family: 'pretendard';
    font-size: 20px;
    line-height: 23.87px;
    font-weight: 500;
    color: #FFFFFF;
`
const PlusButton = styled.button`
    width: 68px;
    height: 48px;
    background: rgba(166, 111, 229, 0.54);
    border-radius: 12px;
    border: none;
    display:flex;
    justify-content:center;
    align-items:center;
`

const TitleWrapper = styled.div`
    width: auto;
    height: auto;
    display: flex;
    align-content: center;
    margin: 40px;
    margin-top: 80px;
`

const TitleTextWrapper = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
`
const IntroBox = styled.div`
    width: 100%;
    height: 995px;
    background: linear-gradient(196.13deg, rgba(117, 40, 218, 0.6) 25.23%, rgba(119, 32, 234, 0.814) 30.13%, #7000FF 64.26%);
    box-shadow: inset 0px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 64px;

`
const KindText = styled.div`
    font-family: 'pretendard';
    font-size: 20px;
    font-weight: 600;
    width: 53px;
    height: auto;
    border-bottom: 2px solid black;
    margin-left: 40px;
`
const KindTextWrapper =styled.div`
    width: 100%;
    height: auto;
    display:flex;
    margin-top: 20px;
    margin-bottom: 10px;
`



//값을 받을때, Widgets과 종류에 대한 값 두개씩을 줘야함.
//ex) ["기본",[{name: "메일",img:"aa"},{name: "이름이름",img:"aa"},{name: "메일",img:"aa"},{name: "메일",img:"aa"}]]
const BasicWidgets = [{name: "메일",img:"aa"},{name: "이름이름",img:"aa"},{name: "메일",img:"aa"},{name: "메일",img:"aa"}];
const CustomWidgets = [{name: "메일2",img:"aa"},{name: "이름이름2",img:"aa"},{name: "메일2",img:"aa"},{name: "메일2",img:"aa"}];

function CurrentWidgets (props){
    const current = props.current;
    if(current==="커스텀"){
        return(<>
            <KindWidgets Widgets={CustomWidgets}/>
        </>)
    }
    else if(current==="베이직"){
        return(<>
            <KindWidgets Widgets={BasicWidgets}/>
        </>)
    }
}

const InstalledWidget = () =>{

    const [kind,setKind] = useState("커스텀");

    function basicClick(){
        setKind("베이직");
    }
    function customClick(){
        setKind("커스텀");
    }

    return(<>
    <MobileLayout>
        <TitleWrapper>    
            <TitleTextWrapper>
                <Title1>다양한 인포테인먼트</Title1>
                <Title2>나만의 스타일로</Title2>
            </TitleTextWrapper>    
            <PlusButton><GoPlus size="28" color="#9042EA"/></PlusButton>
        </TitleWrapper>

        <IntroBox>
            <IntroText>기본 세팅은 다음과 같아요</IntroText>
        </IntroBox>
        <KindTextWrapper>
            <KindText style={{color: kind==="베이직" ?'#E53E3E':'#1B1313',borderBlockColor: kind==="베이직" ?'#E53E3E':'#1B1313'  }} onClick={basicClick}>베이직</KindText>
            <KindText style={{color: kind==="커스텀" ?'#E53E3E':'#1B1313', borderBlockColor: kind==="커스텀" ?'#E53E3E':'#1B1313' }} onClick={customClick}>커스텀</KindText>
        </KindTextWrapper>

        <CurrentWidgets current={kind}/>
        
    

    </MobileLayout></>)
}

export default InstalledWidget;