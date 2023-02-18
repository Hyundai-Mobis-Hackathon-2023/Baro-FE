import styled from "styled-components";
import {TbDownload} from "react-icons/tb"


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
    margin-bottom:0px;

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
const ServiceImg = styled.img`
    width: 125px;
    height: 125px;
    background: linear-gradient(140.1deg, #F2F2F4 7.1%, rgba(242, 242, 244, 0) 92.97%), linear-gradient(90deg, rgba(253, 132, 220, 0.2) 3.12%, rgba(127, 214, 250, 0.2) 100%);
    border: 1px solid #ECECEC;
    border-radius: 24px;
    object-fit: cover;
`





function Widget({eachWidget}){return(<>
    <EachWidgetWrapper>
        <ImgSection><ServiceImg src={eachWidget.img}/></ImgSection>
        <KindName>{eachWidget.name}<TbDownload style={{marginBottom:"5px"}} size="18"/></KindName>
    </EachWidgetWrapper>

</>)}






const RecommendService = (props) =>{
    return(<>
    
    <SectionWrapper>
        {props.RecomServices.map((widget)=>(<Widget eachWidget={widget}/>))}
    </SectionWrapper></>)
}



export default RecommendService;