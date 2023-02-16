import styled from "styled-components";
import exImg from "./Group 10.png"
import Margin from "../../../component/Margin/Margin";
import {MdFileDownloadDone} from "react-icons/md"

const SmallTitle =  styled.div`
    font-family: 'pretendard';
    font-size: 22px;
    line-height: 26.25px;
    font-weight: 700;   
    margin-top: 50px;
`
const KindName =  styled.div`
    font-family: 'pretendard';
    font-size: 16px;
    line-height: 19.09px;
    font-weight: 700;   
    display: flex;
    width: 100%;
    margin: 8px;
    align-items: center;
    text-align: center;
    justify-content: space-between;
`

const SectionWrapper = styled.div`
    width:100%;
    height:auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
const EachWidgetWrapper = styled.div`
    width:125px;
    height:auto;
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 18px;

`
const ImgSection = styled.div`
    width: 125px;
    height: 125px;
    border-radius: 24px;
    background: linear-gradient(317.7deg, #000000 0%, #FFFFFF 105.18%), #EBECF0;
    background-blend-mode: soft-light, normal;
    display:flex;
    justify-content:center;
    align-items:center;
`



function Widget({eachWidget}){return(<>
    <EachWidgetWrapper>
        <ImgSection><img src={exImg}></img></ImgSection>
        <KindName>{eachWidget.name}<MdFileDownloadDone size="25"/></KindName>
    </EachWidgetWrapper>

</>)}






const KindWidgets = (props) =>{
    return(<>
    <SectionWrapper>

        {props.Widgets.map((widget)=>(<Widget eachWidget={widget}/>))}
    </SectionWrapper></>)
}

export default KindWidgets;