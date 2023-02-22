import styled from 'styled-components';
import Clock from '../Clock/Clock';
import Flex from '../Flex/Flex';

const Background = styled(Flex)`
  width: 100%;
  height: 100%;
  background: linear-gradient(90.79deg, #5677b9 -2.12%, #90c4c9 104.8%);
`;

const InfotainmentView = styled.div`
  width: 1920px;
  height: 655px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0px 68px;
  align-items: center;
  // 선은 쉽게 보기위한 용도. 나중에 지울 거임
  flex-wrap: wrap;
`;

const InfotainmentLayout = ({ children }) => (
  <>
    <Clock />
    <Background>
      <InfotainmentView>{children}</InfotainmentView>
    </Background>
  </>
);

export default InfotainmentLayout;
