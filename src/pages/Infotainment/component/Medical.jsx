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
    width:500px;
    height: auto;
`

const Medical = () => {
    return(<><TrayWrapper>
              <TitleWrapper>
        <div style={{marginLeft:"40px"}}>{" "}</div>
        <WidgetTitle>
            메디컬 서비스  
        </WidgetTitle>
        <MdArrowForwardIos size="50" color="#FFFFFF" style={{marginTop:"40px",paddingRight:"13px"}}/>
      </TitleWrapper>
        <ImgSection src="https://i.ibb.co/D9xmFxC/Group-140.png/"/></TrayWrapper></>)
}

export default Medical;
