import PropTypes from "prop-types";
import styled from "styled-components";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: white;
`;

const Mobile = styled.div`
  width: 390px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) =>
    props.color
      ? props.theme.colors[props.color]
      : props.theme.colors.background};

  @media (min-width: 400px) {
    width: 360px;
  }
`;

const ProgressBar = styled.div`
  width: 264px;
  height: 8px;
  margin-top: 76px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.black};
`;

const MobileLayout = ({ children, color, bar }) => (
  <Background>
    <Mobile color={color}>
      {bar && <ProgressBar />}
      {children}
    </Mobile>
  </Background>
);

MobileLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MobileLayout;
