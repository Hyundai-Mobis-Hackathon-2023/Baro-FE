import styled from "styled-components";


const Title = styled.div`
    font-family: 'pretendard';
    font-size: 22px;
    font-weight: 700;
    color : #F5F5F5;
    margin-top: 33px;
    margin-left: 43px;
`

const ServiceBoxWrapper = styled.div`
    width: 393px;
    height: auto;
    margin-top: 16px;
    white-space: nowrap;
    overflow-x: auto;
    padding-left: 40px;
    -ms-overflow-style: none; 
    scrollbar-width: none; 
    ::-webkit-scrollbar {
    display: none;
}
`
const ServiceBox = styled.img`
    width: 85px;
    height: 85px;
    background: #EEEEEE;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    margin-right: 8px;
    display: inline-block;
`



const InstalledService = (props) =>{
    return(<>
    <Title>설치된 서비스</Title>
    <ServiceBoxWrapper>
        {props.Services.map((Service)=>{
            return(<ServiceBox src={Service.img}></ServiceBox>)
        })}
    </ServiceBoxWrapper>
    
    </>)
}

export default InstalledService;