import styled from "styled-components";

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
  color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.font.buttonText}
`;

const Button = ({ children, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
);

export default Button;
