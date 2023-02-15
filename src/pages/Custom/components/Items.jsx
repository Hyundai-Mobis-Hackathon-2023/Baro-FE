import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';
import CategoryTag from './CategoryTag';

const Container = styled.div`
  position: absolute;

  width: 100%;
  height: ${({ curHeight }) => curHeight - 530}px;
  bottom: 0;
  padding-top: 30px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 30px 30px 0 0;
`;

const ItemContainer = styled.div`
  width: 100%;
  height: ${({ curHeight }) => curHeight - 620}px;
  bottom: 0;
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 32px 30px 32px;

  // 스크롤 만들기
  overflow: auto;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Items = ({ tags, children, selectedCategory, setSelectedCategory, tagsEng }) => {
  const [curHeight, setCurHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setCurHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Container curHeight={curHeight}>
        <CategoryTag
          tagsEng={tagsEng}
          tags={tags}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <ItemContainer curHeight={curHeight}>{children}</ItemContainer>
      </Container>
    </>
  );
};

export default Items;
