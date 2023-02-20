import styled from 'styled-components';

const Title = styled.div`
  font-family: 'pretendard';
  font-size: 22px;
  font-weight: 700;
  color: #f5f5f5;
  margin-top: 33px;
  margin-left: 43px;
`;

const ServiceBoxWrapper = styled.div`
  width: 100%;
  height: auto;
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

// 아이콘들이 화면 밖으로 넘어가길래 임시로 추가한 컴포넌트
const TempWrapper = styled.div`
  width: 389px;
  position: relative;
  left: 4px;
`;

const InstalledService = (props) => {
  return (
    <>
      <Title>설치된 서비스</Title>
      <TempWrapper>
        <ServiceBoxWrapper>
          {props.Services.map((Service) => {
            return <ServiceBox src={Service.img}></ServiceBox>;
          })}
        </ServiceBoxWrapper>
      </TempWrapper>
    </>
  );
};

export default InstalledService;
