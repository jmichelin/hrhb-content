const strNumConverter = (str) => {
  return str.split(',').map((n) => Number(n))
};

const heightComparer = (arr) => {
  return arr.sort((a, b) => {
    return a - b;
  });
};