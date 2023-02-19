import styled from "styled-components";
import {TbDownload} from "react-icons/tb"
import React,{ useState} from "react";
import Margin from "../../../component/Margin/Margin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    border: 1px solid;
    border-radius: 24px;
    border-color: ${(props) => props.borderCheck===true? "#7914FB" : "#F2F2F4"};
    object-fit: cover;
`
const ButtonPositon = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 100px;
    left: 50%;
    transform: translate(-50%, 0);
`

const CustomButtom = styled.div`
    width: 80px;
    height: 42px;
    background: ${props=> props.buttonColor || "#737373"};
    border-radius: 20px;
    font-family: 'pretendard';
    font-weight: 700;
    font-size: 17.5px;
    line-height: 21px;
    color: #FFFFFF;
    text-align: center;
    padding-top: 12px;
`
const StyledContainer = styled(ToastContainer)`
  &&&.Toastify__toast-container {
    
  }
  .Toastify__toast {
    background: rgba(168, 172, 181, 0.8);
    border-radius: 14px;
    text-align:center;
    font-weight: 600;
    font-size: 16px;
    color: #FFFFFF;
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
    display:none;
  }
`;

var plusServiceArr = [];


//웨젯 하나에 대한 것
function Widget({eachWidget,setLength,checking}){

    const [installCheck, setInstallCheck] = useState(false);

    const Install = () => {
        if(checking===true){
            setInstallCheck(!installCheck);
        
            //없다면 넣어줌
            if(plusServiceArr.indexOf(eachWidget.key)==-1&&installCheck===false){
                plusServiceArr.push(eachWidget.key);   
            }
            //있는데 취소하면 없앰
            else if(plusServiceArr.indexOf(eachWidget.key)!==-1&&installCheck===true){
                plusServiceArr.splice(plusServiceArr.indexOf(eachWidget.key),1);
            }
            setLength(plusServiceArr.length);
        }
        
        console.log(installCheck,plusServiceArr);
       
    }

    
    return(<>
    <EachWidgetWrapper onClick={Install} >
        <ImgSection ><ServiceImg src={eachWidget.img} borderCheck={installCheck} /></ImgSection>
        <KindName>{eachWidget.name}<TbDownload style={{marginBottom:"5px"}} size="18"/></KindName>
    </EachWidgetWrapper>

</>)}






//map으로 뿌려주는 부분
const RecommendService = (props) =>{
    const [check,setCheck] = useState(false);
    const [length, setLength] = useState(0);
    

    const ClickCheck = () =>{
        setCheck(!check);
    }
    const Notify = () => {
        toast("선택이 완료되었습니다.")};

        
    return(<>
    
    <SectionWrapper>
        {props.RecomServices.map((widget)=>(<Widget eachWidget={widget} setLength={setLength} checking={check}/>))}
    </SectionWrapper>
    <StyledContainer
                position="bottom-center" // 알람 위치 지정
                autoClose={1500} // 자동 off 시간
                hideProgressBar={true} // 진행시간바 숨김
                limit={1} // 알람 개수 제한
                closeOnClick = {false}
                style={{width:"339px",height:"47px", marginBottom:"150px", borderRadius:"14px" }}
            />
    <ButtonPositon>
        {check===false?
            <><CustomButtom buttonColor="#9042EA" onClick={ClickCheck}>선택</CustomButtom>
             <Margin width="12" height="10"/>
            <CustomButtom buttonColor="#737373">다음</CustomButtom>
        </>
            :
        <>
            <CustomButtom buttonColor={plusServiceArr.length>=1?"#9042EA":"#737373"} onClick={()=>{ClickCheck();Notify();}}>완료</CustomButtom>
        </>}
                        
    </ButtonPositon>
    </>)
}



export default RecommendService;