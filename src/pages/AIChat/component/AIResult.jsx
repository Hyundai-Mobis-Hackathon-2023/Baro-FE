import React from 'react';
import styled from 'styled-components';
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
import custom from '../images/custom.jpg';
import { useNavigate } from 'react-router-dom';
import theme from '../../../assets/theme/Theme';
import axios from 'axios';

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
  const categoryImg = [living, office, entertainment, store, transit, medical];
  const { category, categoryEng } = theme;
  const navigate = useNavigate();
  const selectedCategoryName = category[categoryEng.indexOf(answer.category)];
  const moveToPreset = () => {
    console.log(answer);
    if (categoryEng.indexOf(answer.category) === -1) navigate('/custom');
    else {
      axios
        .post(
          `${process.env.REACT_APP_API}/category/selectCategory`,
          {
            categoryIdx: parseInt(categoryEng.indexOf(answer.category)),
          },
          {
            headers: {
              Authorization: `${localStorage.getItem('accessToken')}`,
            },
          }
        )
        .then((r) => {
          console.log(r.data);
          navigate(`/preset/${answer.category}`);
        });
    }
  };

  return (
    <StyledMotion initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <BackgroundImage>
        <StyledImg
          src={categoryEng.indexOf(answer.category) === -1 ? custom : categoryImg[categoryEng.indexOf(answer.category)]}
        />
      </BackgroundImage>
      <ResultWrapper>
        <div>
          <Typography mainTitle color='background' style={{ width: '300px' }}>
            {categoryEng.indexOf(answer.category) === -1
              ? '차량 커스텀 서비스'
              : { selectedCategoryName } + '용 서비스'}
            <br />
            <span style={{ fontFamily: 'pretendard-regular' }}>
              {categoryEng.indexOf(answer.category) === -1 ? '를 추천합니다.' : '테마를 추천합니다.'}
            </span>
          </Typography>
          <Margin height='16' />
          <Typography alertText color='background' style={{ width: '300px', fontFamily: 'pretendard-regular' }}>
            {answer.detail}
          </Typography>
        </div>
        <div style={{ cursor: 'pointer' }} onClick={moveToPreset}>
          <Typography alertText color='background' style={{ width: '300px', fontFamily: 'pretendard-semibold' }}>
            {categoryEng.indexOf(answer.category) === -1
              ? '차량 커스텀하러 가기'
              : { selectedCategoryName } + '서비스 차량 보러가기'}
          </Typography>
          <Arrow />
        </div>
      </ResultWrapper>
    </StyledMotion>
  );
};

export default AIResult;
