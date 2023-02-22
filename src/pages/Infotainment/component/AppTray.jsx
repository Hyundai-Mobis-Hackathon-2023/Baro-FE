import React from 'react';
import Flex from '../../../component/Flex/Flex';
import styled from 'styled-components';
import IconWrapper from './IconWrapper';
import Zoom from './icons/Zoom';
import Youtube from './icons/Youtube';
import Chrome from './icons/Chrome';

const TrayWrapper = styled(Flex)`
  width: 600px;
  height: 600px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  align-items: baseline;
  justify-content: flex-start;
  padding: 15px 0px;
`;

const ScrollWrapper = styled.div`
  width: 600px;
  height: 570px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0px 15px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
`;

const AppTray = () => {
  return (
    <TrayWrapper>
      <ScrollWrapper>
        <Zoom />
        <Youtube />
        <Chrome />
        <IconWrapper />
        <IconWrapper />
        <IconWrapper />
        <IconWrapper />
        <IconWrapper />
        <IconWrapper />
        <IconWrapper />
        <IconWrapper />
        <IconWrapper />
        <IconWrapper />
      </ScrollWrapper>
    </TrayWrapper>
  );
};

export default AppTray;
