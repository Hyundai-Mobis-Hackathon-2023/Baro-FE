import styled from "styled-components";

const Typography = styled.p`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.black};
  ${(props) => props.mainTitle && props.theme.font.mainTitle};
  ${(props) => props.smallTitle && props.theme.font.smallTitle};
  ${(props) => props.buttonText && props.theme.font.buttonText};
  ${(props) => props.contentText && props.theme.font.contentText};
  ${(props) => props.maxNumberText && props.theme.font.maxNumberText};
  ${(props) => props.dialText && props.theme.font.dialText};
`;

export default Typography;
