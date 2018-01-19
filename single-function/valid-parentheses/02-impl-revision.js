const isValidParentheses = (str) => {
  const parenMap = { "{":"}", "(":")", "[":"]" };
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (parenMap[str[i]]) {
      stack.push(parenMap[str[i]]);
    } else if (stack.pop() !== str[i]) {
       return false;
    }
  }
  return (str.length % 2 !== 0) || (stack.length !== 0) || true;
};

module.exports = isValidParentheses;