const isValidParentheses = str => {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let c = str.charAt(i);
    if (c === "(") {
      stack.push(")");
    } else if (c === "[") {
      stack.push("]");
    } else if (c === "{") {
      stack.push("}");
    } else if (stack.length === 0 || stack.pop() !== c) {
      return false;
    }
  }
  return stack.length === 0;
};


module.exports = isValidParentheses;