import { motion } from "framer-motion";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: black;
`;

const Mobile = styled(motion.div)`
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
`;

const ProgressBar = styled.div`
  width: 264px;
  height: 8px;
  margin-top: 76px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.black};
  ${(props) =>
    props.darkShadow &&
    css`
      background: radial-gradient(
          50% 50% at 50% 50%,
          rgba(224, 222, 222, 0.6) 0%,
          rgba(224, 222, 222, 0) 100%
        ),
        #f5f5f5;
    `}
`;

const MobileLayout = ({
  children,
  color,
  bar,
  initial,
  animate,
  transition,
  darkShadow,
}) => (
  <Background>
    <Mobile
      color={color}
      initial={initial}
      animate={animate}
      transition={transition}
      darkShadow={darkShadow}
    >
      {bar && <ProgressBar />}
      {children}
    </Mobile>
  </Background>
);

MobileLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MobileLayout;
