import styled from 'styled-components';
import Typography from '../Typography/Typhography';
import theme from '../../assets/theme/Theme';
import { Toast } from '../Toast/Toast';

const Container = styled.div`
  width: 112px;
  height: 19px;
  display: flex;
  justify-content: space-between;
`;

const Line = styled.div`
  border: 0.5px solid ${theme.colors.gray};
  height: 100%;
  width: 1px;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  top: 99px;
  cursor: pointer;
  left: 40px;
`;

const SelectSize = () => (
  <Wrapper onClick={() => Toast('아직 지원하지 않는 기능입니다.')}>
    <Container>
      <Typography contentText color='alertRed'>
        소형
      </Typography>
      <Line />
      <Typography contentText color='gray'>
        중형
      </Typography>
      <Line />

      <Typography contentText color='gray'>
        대형
      </Typography>
    </Container>
  </Wrapper>
);

export default SelectSize;
