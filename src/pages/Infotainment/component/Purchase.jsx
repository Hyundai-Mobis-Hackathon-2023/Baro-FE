import styled from "styled-components";
import Flex from "../../../component/Flex/Flex";
import {MdArrowForwardIos} from 'react-icons/md'
import {GrCart} from 'react-icons/gr'
import { startTransition } from "react";

const TrayWrapper = styled(Flex)`
  width: 600px;
  height: 600px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  display:flex;
  flex-wrap:wrap;
  align-items: baseline;
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
const BasicText = styled.div`
  font-family: 'S-Core Dream';
  font-style: normal;
  font-weight: 200;
  font-size: 32px;
  color: #FDFDFD;
`
const Circle = styled.div`
  width:120px;
  height: 120px;
  border-radius: 100%;
  display:flex;
  justify-content:center;
  align-items:center;
`

const Purchase = () =>{


    return(<>
    <TrayWrapper>
      <TitleWrapper>
        <div style={{marginLeft:"40px"}}>{" "}</div>
        <WidgetTitle>
            결제창  
        </WidgetTitle>
        <MdArrowForwardIos size="50" color="#FFFFFF" style={{marginTop:"40px",paddingRight:"13px"}}/>
      </TitleWrapper>

      <BasicText>상품을 입력해주세요.</BasicText>
      <Circle style={{backgroundColor:"#FBC02D"}}><GrCart  size="50"/></Circle>

      </TrayWrapper></>)
}


export default Purchase;