import React from 'react';
import styled from 'styled-components';
import Button from '../../../component/Button/Button';
import Margin from '../../../component/Margin/Margin';
import Typography from '../../../component/Typography/Typhography';
import { motion } from 'framer-motion';
import { ReactComponent as Arrow } from './arrow.svg';
import medical from '../images/medical.jpg';
import living from '../images/living.jpg';
import entertainment from '../images/entertainment.jpg';
import office from '../images/office.jpg';
import store from '../images/store.jpg';
import transit from '../images/transit.jpg';
import { useNavigate } from 'react-router-dom';
import theme from '../../../assets/theme/Theme';

const StyledMotion = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(50%);
`;

const ResultWrapper = styled.div`
  width: 340px;
  height: 318px;
  background: linear-gradient(139.44deg, rgba(255, 255, 255, 0.244) 14.1%, rgba(243, 243, 243, 0.048) 84.31%);
  backdrop-filter: blur(10px);
  border: 1px solid #44454a;
  border-radius: 16px;
  position: absolute;
  bottom: 71px;
  padding-left: 20px;
  padding-right: 20px;
  ${(props) => props.theme.flex.flexCenterColumn}
  justify-content: space-evenly;
`;

const AIResult = ({ answer }) => {
  const { category, categoryEng } = theme;
  const navigate = useNavigate();
  const selectedCategoryName = category[categoryEng.indexOf(answer.category)];
  const moveToPreset = () => {
    console.log(answer);
    // navigate(`/preset/${answer.category}`);
  };

  return (
    <StyledMotion initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <BackgroundImage>
        <StyledImg src={medical} />
      </BackgroundImage>
      <ResultWrapper>
        <div>
          <Typography mainTitle color='background' style={{ width: '300px' }}>
            {selectedCategoryName}용 서비스
            <br />
            <span style={{ fontFamily: 'pretendard-regular' }}>테마를 추천합니다.</span>
          </Typography>
          <Margin height='16' />
          <Typography alertText color='background' style={{ width: '300px', fontFamily: 'pretendard-regular' }}>
            이 차량은 응급의료 이동 서비스에 적합합니다.
            <br />
            또한 의료장비를 적절하게 관리하여 구급대원이 그들의 일을 수행하는데 도움이 됩니다.
          </Typography>
        </div>
        <div style={{ cursor: 'pointer' }} onClick={moveToPreset}>
          <Typography alertText color='background' style={{ width: '300px', fontFamily: 'pretendard-semibold' }}>
            {selectedCategoryName} 서비스 차량 보러가기
          </Typography>
          <Arrow />
        </div>
      </ResultWrapper>
    </StyledMotion>
  );
};

export default AIResult;
