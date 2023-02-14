import styled from "styled-components";
import { motion } from "framer-motion";

const StyledMotion = styled(motion.div)``;

const Typo = styled.p`
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
  transition: 0.5s;
`;

const Typography = ({ children, ...rest }) => (
  <StyledMotion>
    <Typo {...rest}>{children}</Typo>
  </StyledMotion>
);

export default Typography;
