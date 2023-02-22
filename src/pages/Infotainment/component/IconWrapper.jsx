import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled(motion.div)`
  width: 160px;
  height: 160px;
  border-radius: 33px;
  overflow: hidden;
  background-color: #bebebe;
  margin: 15px;
`;

const IconWrapper = ({ children }) => {
  return (
    <Wrapper
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </Wrapper>
  );
};

export default IconWrapper;
