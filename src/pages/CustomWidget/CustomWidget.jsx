import MobileLayout from "../../component/MobileLayout/MobileLayout";
import RedSection from "./component/RedSection.png"
import styled from "styled-components";
import InstalledService from "./component/InstalledService";
import RecommendService from "./component/RecommendService";

const RedSec = styled.div`
    width: 405px;
    height: 430px;
    background-image: url("https://i.ibb.co/LRgr5mt/4.png");
    background-size: cover;
    position:relative;
    left: -6px;
    top: -12px;
`
const InstallWidgetWrapper = styled.div`
    position: absolute; 
    top: 5%; 
    left: 5%; 
    font-size: x-large;
`
const Title = styled.div`
    font-family: 'pretendard';
    font-weight: 700;
    font-size: 26px;
    line-height: 31.03px;
`
const InstallFlex = styled.div`
    width: 100%;
    height: auto;
    margin-left: 45px;
    margin-top: 65px;
`
const RecommendTitle = styled.div`
    font-family: 'pretendard';
    font-size: 22px;
    line-height: 26.25px;
    font-weight: 700;
    margin-top: 90px;
    margin-left: 41px;
`
const RecommendContent = styled.div`
    font-family: 'pretendard';
    font-size: 17.5px;
    line-height: 20.88px;
    font-weight: 400;
    margin-left: 41px;
    color: #707070;
    margin-top: 8px;
    margin-bottom: 15px;
`



const InstallServices = [{name:"ss",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhfZpuS5FbnATyFKxTijKMkh0rZiqQfmkS3g&usqp=CAU"},
{name:"ss",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhfZpuS5FbnATyFKxTijKMkh0rZiqQfmkS3g&usqp=CAU"},
{name:"ss",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhfZpuS5FbnATyFKxTijKMkh0rZiqQfmkS3g&usqp=CAU"},
{name:"ss",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhfZpuS5FbnATyFKxTijKMkh0rZiqQfmkS3g&usqp=CAU"},
{name:"ss",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhfZpuS5FbnATyFKxTijKMkh0rZiqQfmkS3g&usqp=CAU"},{name:"ss",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhfZpuS5FbnATyFKxTijKMkh0rZiqQfmkS3g&usqp=CAU"}]


const CustomWidget = () => {
    return( <MobileLayout>
            <RedSec>
                <InstallWidgetWrapper>
                    <InstallFlex>
                        <Title>원하는 인포테인먼트를<br/> 선택해주세요</Title>
                    </InstallFlex>
                   
                    <InstalledService Services={InstallServices}/>
                    <RecommendTitle>추천 서비스</RecommendTitle>
                    <RecommendContent>사용자가 직접 커스텀한 내부 구성에 알맞은 <br/>인포테인먼트를 추천해줍니다.</RecommendContent>
                    <RecommendService RecomServices={InstallServices}/>
                    
                    
                </InstallWidgetWrapper>
            </RedSec>
        </MobileLayout>)
}

export default CustomWidget;