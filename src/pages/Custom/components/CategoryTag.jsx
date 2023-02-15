import styled, { css } from 'styled-components';

const TagContainer = styled.div`
  width: 510px;
  display: flex;
  padding-left: 24px;
  flex-wrap: wrap;

  gap: 10px;
`;

const Container = styled.div`
  width: 100%;
  white-space: nowrap; // 가로 스크롤의 핵심
  overflow-x: scroll; // 가로 스크롤의 핵심
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Tag = styled.button`
  cursor: pointer;
  border: none;
  padding: 12px 10px;
  border-radius: 16px;
  background-color: #ececec;
  color: #afafaf;

  ${({ selectedCategory, name }) =>
    selectedCategory === name
      ? css`
          background-color: #c65252;
          color: white;
        `
      : css`
          background-color: #ececec;
          color: #afafaf;
        `}
  ${({ theme }) => theme.font.contentText};
  font-family: 'pretendard-bold';
`;

const CategoryTag = ({ tags, tagsEng, selectedCategory, setSelectedCategory }) => {
  return (
    <Container>
      <TagContainer>
        {tags.map((tag, i) => (
          <Tag name={tagsEng[i]} selectedCategory={selectedCategory} onClick={() => setSelectedCategory(tagsEng[i])}>
            {tag}
          </Tag>
        ))}
      </TagContainer>
    </Container>
  );
};

export default CategoryTag;
