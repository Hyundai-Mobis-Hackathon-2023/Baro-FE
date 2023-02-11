const colors = {};

const box = `
    border: 1px solid ${colors.skyBlue};
    
    :hover {
      box-shadow: 2px 4px 8px -1px rgba(49, 76, 145, 0.15);
    }
  `;

const font = {
  header: `
      font-family: 'pretendard-bold';
      font-size: 32px;
      line-height: 38px;
      letter-spacing: 0.105em;
    `,
};

const flex = {
  flexCenter: `
      display: flex;
      justify-content: center;
      align-items: center;
    `,
  flexCenterColumn: `
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,
};

const animation = {
  box: { scale: 1.03, transition: { duration: 0.3 } },
};

const theme = {
  colors,
  box,
  font,
  flex,
  animation,
};

export default theme;
