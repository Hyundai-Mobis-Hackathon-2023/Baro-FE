import styled from "styled-components";
import Margin from "../../../component/Margin/Margin";


const Wrapper =styled.div`
    width: 224.68px;
    height: 371.58px;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 20px;
`

const DateText = styled.div`
    font-family: 'pretendard Variable';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #BEBEBE;
    margin-left: 18.2px;
`
const TimeText = styled.div`
    font-family: 'pretendard Variable';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #BEBEBE;
    
`

const TodoSection = styled.div`
    width: 168.3px;
    height: 57.61px;
    margin-left:20px;
    display: flex;
`

const WhiteBar = styled.div`
    border-radius: 10px;
    width:6px;
    height: 50px;
    border: none;
    background-color: #F6F6F6;
    margin-right: 10px;
`
const TodoText = styled.div`
    font-family: 'pretendard Variable';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    color: #FFFFFF;
`
const TodoContent = styled.div`
    width: auto;
    height: auto;
    
`



const Calendar = () =>{
    let now = new Date;
    let todayMonth = now.getMonth() +1;
    let todayDate = now.getDate();

    const week = ['일','월','화','수','목','금','토'];
    let dayOfWeek = week[now.getDay()];




    return(<>
    <Wrapper>
        <Margin width="100" height="22.43"/>
        <DateText>{todayMonth +"월 "+todayDate+"일 "+dayOfWeek+"요일"}</DateText>
        <Margin width="100" height="30"/>
        <TodoSection>
            <WhiteBar/>
            <TodoContent>
                <Margin width="100" height="7"/>
                <TodoText>간단한 아침식사</TodoText>
                <Margin width="100" height="5"/>
                <TimeText>7:00-8:00</TimeText>
            </TodoContent>
        </TodoSection>
        <TodoSection>
            <WhiteBar/>
            <TodoContent>
                <Margin width="100" height="7"/>
                <TodoText>현대모비스 출근</TodoText>
                <Margin width="100" height="5"/>
                <TimeText>9:00-18:00</TimeText>
            </TodoContent>
        </TodoSection>
        <TodoSection>
            <WhiteBar/>
            <TodoContent>
                <Margin width="100" height="7"/>
                <TodoText>퇴근 및 친구 저녁...</TodoText>
                <Margin width="100" height="5"/>
                <TimeText>18:00-20:00</TimeText>
            </TodoContent>
        </TodoSection>
        <TodoSection>
            <WhiteBar/>
            <TodoContent>
                <Margin width="100" height="7"/>
                <TodoText>코딩 공부</TodoText>
                <Margin width="100" height="5"/>
                <TimeText>20:00-22:00</TimeText>
            </TodoContent>
        </TodoSection> 
        <TodoSection>
            <WhiteBar/>
            <TodoContent>
                <Margin width="100" height="7"/>
                <TodoText>취침 준비 및 취침</TodoText>
                <Margin width="100" height="5"/>
                <TimeText>22:00-24:00</TimeText>
            </TodoContent>
        </TodoSection> 
    
    
    </Wrapper>
    </>)
}

export default Calendar;