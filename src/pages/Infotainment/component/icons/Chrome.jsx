import React from 'react';
import styled from 'styled-components';
import chrome from './imgs/chrome.png';
import IconWrapper from '../IconWrapper';
import { useNavigate } from 'react-router-dom';

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Chrome = () => {
  const navigate = useNavigate();

  return (
    <IconWrapper>
      <StyledImage onClick={() => navigate('/infotainment/internet')} src={chrome} />
    </IconWrapper>
  );
};

export default Chrome;
