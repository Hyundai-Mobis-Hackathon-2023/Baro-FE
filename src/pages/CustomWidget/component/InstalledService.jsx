import styled from "styled-components";
import Flex from "../../../component/Flex/Flex";
import Typography from "./../../../component/Typography/Typhography";

const AllWrapper = styled(Flex)`
  width: 100%;
  z-index: 2;
`;

const TitleWrapper = styled.div`
  width: 314px;
  text-align: left;
`;

const ServiceBoxWrapper = styled.div`
  width: 390px;
  position: relative;
  left: 0px;
  margin-top: 16px;
  white-space: nowrap;
  overflow-x: auto;
  padding: 0 40px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ServiceBox = styled.img`
  width: 85px;
  height: 85px;
  background: #eeeeee;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  margin-right: 8px;
  display: inline-block;
`;

const InstalledService = (props) => {
  return (
    <AllWrapper flexCenter column>
      <TitleWrapper>
        <Typography buttonText color="white">
          설치된 서비스
        </Typography>
      </TitleWrapper>
      <ServiceBoxWrapper>
        {props.Services.map((Service) => {
          return <ServiceBox src={Service.img}></ServiceBox>;
        })}
      </ServiceBoxWrapper>
    </AllWrapper>
  );
};

export default InstalledService;
