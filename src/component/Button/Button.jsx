import styled, { css } from "styled-components";

const StyledButton = styled.button`
  width: 349px;
  height: 58px;
  cursor: pointer;
  border-radius: 20px;
  border: none;
  background-color: ${(props) =>
    props.bgColor
      ? props.theme.colors[props.bgColor]
      : props.theme.colors.mainGreen};
  color: ${(props) => (props.color ? props.color : props.theme.colors.white)};
  ${(props) => props.theme.font.buttonText}
  transition: 0.5s;

  ${(props) =>
    props.middle &&
    css`
      width: 162px;
      height: 58px;
    `}

  ${(props) =>
    props.small &&
    css`
      width: 80px;
      height: 42px;
      ${(props) => props.theme.font.smallButtonText}
    `}
`;

const Button = ({ children, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
);

export default Button;
