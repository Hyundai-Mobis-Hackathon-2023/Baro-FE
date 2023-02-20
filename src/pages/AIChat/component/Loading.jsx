import React, { useEffect } from 'react';
import styled from 'styled-components';
import Margin from '../../../component/Margin/Margin';
import Lottie from 'lottie-react';
import lottieLoading from '../../../assets/svgs/loading.json';
import Typography from '../../../component/Typography/Typhography';
import { motion } from 'framer-motion';
import axios from 'axios';

const StyledMotion = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
`;

const StyledLottie = styled(Lottie)`
  width: 250px;
  height: 250px;
`;

const Loading = ({ setAnswer, question, currentPage, setCurrentPage }) => {
  useEffect(() => {
    axios
      .post(
        `${process.env.REACT_APP_API}/chatGPT/askChatGPT`,
        {
          question: question,
        },
        {
          headers: {
            Authorization: `${localStorage.getItem('accessToken')}`,
          },
        }
      )
      .then((r) => {
        console.log(r.data);
        setAnswer({ detail: r.data.result.answer, category: r.data.result.category });
        setCurrentPage(currentPage + 1);
      });
  }, []);

  return (
    <StyledMotion initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <StyledLottie animationData={lottieLoading} />
      <Margin height='50' />
      <Typography buttonText>
        <span style={{ color: '#7914FB' }}>OpenAI</span>가 당신을 위한
        <br /> 차량을 검색하고 있어요.
      </Typography>
      <Margin height='50' />
    </StyledMotion>
  );
};

export default Loading;
