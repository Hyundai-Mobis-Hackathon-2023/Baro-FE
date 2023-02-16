import styled from "styled-components";
import theme from "../../../assets/theme/Theme";
import Typography from "../../../component/Typography/Typhography";

const ItemContainer = styled.div`
  width: 154px;
  height: 183px;
  margin: 14px 0;

  p {
    padding-left: 5px;
    padding-top: 9px;
  }
`;

const Photo = styled.div`
  width: 154px;
  height: 154px;
  border-radius: 24px;
  border: 1px solid ${theme.colors.blueGray};
  overflow: hidden;

  display: flex;
  justify-content: center;

  img {
    position: relative;
    top: -50px;
    height: 250px;
  }
`;

const Item = ({ name, photo, onClick, id }) => {
  return (
    <ItemContainer id={id} onClick={onClick}>
      <Photo>
        <img src={require(`../images/${photo}.png`)} />
      </Photo>
      <Typography $contentText>{name}</Typography>
    </ItemContainer>
  );
};

export default Item;
