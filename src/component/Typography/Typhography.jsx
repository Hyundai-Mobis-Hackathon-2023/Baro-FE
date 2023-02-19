import styled from "styled-components";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { MotionConfig } from "framer-motion";
import isValidProp from "@emotion/is-prop-valid";

const Typo = styled(motion.p)`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.black};
  ${(props) => props.mainTitle && props.theme.font.mainTitle};
  ${(props) => props.smallTitle && props.theme.font.smallTitle};
  ${(props) => props.buttonText && props.theme.font.buttonText};
  ${(props) => props.contentText && props.theme.font.contentText};
  ${(props) => props.maxNumberText && props.theme.font.maxNumberText};
  ${(props) => props.dialText && props.theme.font.dialText};
  ${(props) => props.aiContentText && props.theme.font.aiContentText};
  ${(props) => props.alertText && props.theme.font.alertText};
  ${(props) => props.smallButtonText && props.theme.font.smallButtonText};
  ${(props) => props.loadingText && props.theme.font.loadingText};
  transition: 0.5s;
`;

const Typography = ({ children, ...rest }) => {
  return (
    <MotionConfig isValidProp={isValidProp}>
      <Typo {...rest}>{children}</Typo>
    </MotionConfig>
  );
};

Typography.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Typography;
