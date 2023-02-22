import MobileLayout from '../../component/MobileLayout/MobileLayout';
import Typography from '../../component/Typography/Typhography';
import styled from 'styled-components';
import ThemeKinds from './component/ThemeKinds';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TitleWrapper = styled.div`
  width: 100%;
  height: 70px;
  margin-top: 64px;
  padding-left: 40px;
`;

const CategoryChoice = () => {
  //curruentSlider가 테마 담당하는 변수
  const [currentSlider, setCurrentSlide] = useState(1);
  const navigate = useNavigate();

  const postCategory = () => {
    axios
      .post(
        `${process.env.REACT_APP_API}/category/selectCategory`,
        {
          categoryIdx: parseInt(currentSlider),
        },
        {
          headers: {
            Authorization: `${localStorage.getItem('accessToken')}`,
          },
        }
      )
      .then((r) => {
        console.log(r.data);
        navigate('/number-choice');
      });
  };

  return (
    <>
      <MobileLayout bar darkShadow>
        <TitleWrapper>
          <Typography mainTitle>
            필요한 테마 한가지를 <br />
            골라주세요
          </Typography>
        </TitleWrapper>
        <ThemeKinds currentSlider={currentSlider} setCurrentSlide={setCurrentSlide} onClick={postCategory} />
      </MobileLayout>
    </>
  );
};

export default CategoryChoice;
