import styled from "styled-components";
import Flex from "../../../component/Flex/Flex";
import {MdArrowForwardIos} from 'react-icons/md'

const TrayWrapper = styled(Flex)`
  width: 600px;
  height: 600px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  display:flex;
  flex-wrap:wrap;
  justify-content: center;
  padding: 15px 0px;
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`
const WidgetTitle = styled.div`
  font-family: 'S-Core Dream';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  color: #FFFFFF;
  margin-top: 55px;
`

const ImgSection =styled.img`
    width:300px;
    height: auto;
`

const Switch = () => {
    return(<><TrayWrapper>
              <TitleWrapper>
        <div style={{marginLeft:"40px"}}>{" "}</div>
        <WidgetTitle>
            스위치  
        </WidgetTitle>
        <MdArrowForwardIos size="50" color="#FFFFFF" style={{marginTop:"40px",paddingRight:"13px"}}/>
      </TitleWrapper>
      <ImgSection src="https://i.ibb.co/pz4kFvf/1.png"/></TrayWrapper></>)
}

export default Switch;


