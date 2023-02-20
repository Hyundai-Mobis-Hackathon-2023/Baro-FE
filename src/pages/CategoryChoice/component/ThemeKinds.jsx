import styled from 'styled-components';
import Button from '../../../component/Button/Button';
import React, { Component } from 'react';
import SimpleSlider from './SimpleSlider';
import { useNavigate } from 'react-router-dom';

const ThemeAllWapper = styled.div`
  width: 310px;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

// 선택 버튼 fixed를 하기위한 div
const ButtomFix = styled.div`
  position: fixed;
  bottom: 72px;
`;

const ThemeKinds = ({ currentSlide, setCurrentSlide, onClick }) => {
  const navigate = useNavigate();

  return (
    <>
      <ThemeAllWapper>
        <SimpleSlider currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
      </ThemeAllWapper>
      <ButtomFix>
        <Button bgColor='mainRed' onClick={onClick}>
          선택
        </Button>
      </ButtomFix>
    </>
  );
};

export default ThemeKinds;
