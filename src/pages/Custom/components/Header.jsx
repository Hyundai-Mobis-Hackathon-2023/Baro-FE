import { MdArrowBackIos } from 'react-icons/md';
import Button from '../../../component/Button/Button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.header`
  width: 100%;
  position: absolute;
  top: 30px;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
`;

const Header = ({ onClick }) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <MdArrowBackIos size={30} onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
      <Button small color='#DE5F5F' bgColor='white' onClick={onClick}>
        완료
      </Button>
    </HeaderContainer>
  );
};

export default Header;
