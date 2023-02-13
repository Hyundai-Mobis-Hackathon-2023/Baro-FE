const arrayReplace = (arr, index, replace) => {
  const copy = [...arr];
  copy[index] = replace;
  return copy;
};

export default arrayReplace;
