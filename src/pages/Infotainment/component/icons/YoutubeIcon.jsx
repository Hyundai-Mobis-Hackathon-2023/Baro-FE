import React from 'react';
import styled from 'styled-components';
import youtube from './imgs/youtube.png';
import IconWrapper from '../IconWrapper';
import { useNavigate } from 'react-router-dom';

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const YoutubeIcon = ({ isYoutube, setIsYoutube }) => {
  const navigate = useNavigate();

  return (
    <IconWrapper>
      <StyledImage src={youtube} onClick={() => setIsYoutube(!isYoutube)} />
    </IconWrapper>
  );
};

export default YoutubeIcon;
