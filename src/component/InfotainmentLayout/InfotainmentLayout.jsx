import styled from "styled-components";
import Flex from "../Flex/Flex";

const Background = styled(Flex)`
  width: 100%;
  height: 100%;
  background: linear-gradient(90.79deg, #5677b9 -2.12%, #90c4c9 104.8%);
`;

const InfotainmentView = styled.div`
  width: 1920px;
  height: 655px;

  // 선은 쉽게 보기위한 용도. 나중에 지울 거임
  border: 1px solid black;
`;

const InfotainmentLayout = ({ children }) => (
  <Background>
    <InfotainmentView>{children}</InfotainmentView>
  </Background>
);

export default InfotainmentLayout;
