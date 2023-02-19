import styled from "styled-components";
import Typography from "../../../component/Typography/Typhography";
import Margin from "../../../component/Margin/Margin";
import {BsFillExclamationCircleFill} from 'react-icons/bs'

const ReceiptWrapper = styled.div`
    width: 360px;
    height: 756px;
    background: #FFFFFF;
    border-radius: 6px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
const ReceiptFlex = styled.div`
    width: 100%;
    height: auto;
    margin-left: 25px;
    padding-top: 39px;
`
const ReceiptTitle = styled.div`
    font-family: 'pretendard';
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
`
const Line = styled.div`
    width: 90%;
    height: 0px;
    border: 1px solid #000000;
    margin-top: 12px;
    margin-bottom: 12px;
`
const GrayLine = styled.div`
    width: 90%;
    height: 0px;
    opacity: 0.3;
    border: 1px solid #707070;
    margin-top: 16px;
    margin-bottom: 12px;
`
const ContentFlex = styled.div`
    width: 310px;
    height: auto;
    display: flex;
    justify-content: space-between;
`
const RentalBox = styled.div`
    width: 310px;
    height: 197px;
    background: #D9D9D9;
    border-radius: 6px;
    margin-top: 12px;
`
const CautionWrapper = styled.div`
    width: 100%;
    height: auto;
    margin-top: 40px;
    display: flex;
`
const SmallText = styled.div`
    font-family: 'pretendard'; 
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #707070;
`


const Receipt = (props) =>{
    return(<>
        <ReceiptWrapper>
            <ReceiptFlex>
                <ReceiptTitle>의료용 서비스 PBV</ReceiptTitle>
                <Margin width="100" height="40"/>
                <Typography contentText style={{fontWeight:"700"}}>예약 상세내역</Typography>
                <Line/>
                <Margin width="300" height="16"/>
                <ContentFlex>
                    <Typography color="darkGray">예약자</Typography>
                    <Typography color="darkGray">{props.userName}</Typography>
                </ContentFlex>
                <Margin width="300" height="8"/>
                <ContentFlex>
                    <Typography color="darkGray">연락처</Typography>
                    <Typography color="darkGray">{props.userNumber}</Typography>
                </ContentFlex>
                
                <Margin width="300" height="40"/>
                <Typography contentText style={{fontWeight:"700"}}>대여시간 안내</Typography>
                <Line/>
                <RentalBox/>

                <Margin width="300" height="40"/>
                <Typography contentText style={{fontWeight:"700"}}>결제 정보를 확인해주세요.</Typography>
                <Margin width="300" height="20"/>
                <ContentFlex>
                    <Typography color="darkGray">대여요금</Typography>
                    <Typography>190,000원</Typography>
                </ContentFlex>
                <Margin width="300" height="8"/>
                <ContentFlex>
                    <Typography color="darkGray">이동요금</Typography>
                    <Typography>6,000</Typography>
                </ContentFlex>
                <GrayLine/>
                <ContentFlex>
                    <Typography color="darkGray">최종 요금</Typography>
                    <Typography style={{display:"flex"}}><div style={{color:"#559FF3"}}>196,000</div>원</Typography>
                </ContentFlex>
                <CautionWrapper>
                    <BsFillExclamationCircleFill color="E53E3E" size="13"/>
                    <Margin width="5" height="8"/>
                    <SmallText>대여시간 수수료 부과 정책에 따라 추가비용이 발생한다는 점<br/>유의하시길 바랍니다. 대여 전 위의 안내사항을 확인해주세요.</SmallText>
                </CautionWrapper>


            </ReceiptFlex>
        </ReceiptWrapper></>)
}

export default Receipt;