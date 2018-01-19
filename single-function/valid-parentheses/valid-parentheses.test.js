const isValidParentheses = require('./submission');

describe('isValidParentheses', () => {
  it('isValidParentheses should be defined', () => {
    expect(isValidParentheses).toBeDefined();
  });

  it('given ( return false', () => {
    const stringOfParens = '(';
    const expected = false;
    expect(isValidParentheses(stringOfParens)).toEqual(expected);
  });

  it('given (){}[] return true', () => {
    const stringOfParens = '(){}[]';
    const expected = true;
    expect(isValidParentheses(stringOfParens)).toEqual(expected);
  });

  it('given (()) return true', () => {
    const stringOfParens = '(())';
    const expected = true;
    expect(isValidParentheses(stringOfParens)).toEqual(expected);
  });

  it('given (({[]}{[]})) return true', () => {
    const stringOfParens = '(({[]}{[]}))';
    const expected = true;
    expect(isValidParentheses(stringOfParens)).toEqual(expected);
  });

  it('given ({)} return false', () => {
    const stringOfParens = '({)}';
    const expected = false;
    expect(isValidParentheses(stringOfParens)).toEqual(expected);
  });

  it('given odd length return false', () => {
    const stringOfParens = '((((({)';
    const expected = false;
    expect(isValidParentheses(stringOfParens)).toEqual(expected);
  });

});
