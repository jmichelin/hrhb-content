const isValidParentheses = (str) => {
  if(str.length <= 1) { return false }
  const parenMap = { '{':'}', '(':')', '[':']' };
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

/*
Strategy: Step through the given string, if a valid opening paren push closing paren on to stack.
If a non valid opening paren found pop from the stack and not equal to the current string value invalidate string.

Transformation Steps:
  Acceptable Chars: {}[]()
  Given '(())'
  Step 1: '(' found push ')' onto stack
  Step 2: '(' found push ')' onto stack
  Step 3: ')' not found, popped value from stack matches
  Step 4: ')' not found, popped value from stack matches
  Step 5: No invalid pairs found, return true.

const isValidParentheses = (str) => {
  const parenMap = { '{':'}', '(':')', '[':']' };
  const stack = [];
  // iterate over string
    // if current string character is in map push to stack
    // else if char does not map, compare to stack value return false if no match
  // no invalid parens found return true
};
}

Big-0
Since I only have to traverse the string in one direction, one time this is O(n)


 */

module.exports = isValidParentheses;
