const isNumberPalindrome = require('./reference-solution');

describe('isNumberPalindrome', () => {

  it('isNumberPalindrome to be defined', () => {
    expect(isNumberPalindrome).toBeDefined()
  });

  it('to return true with a positive number palindrome', () => {
    const testNumber = 1331;
    const expected = true;
    expect(isNumberPalindrome(testNumber)).toEqual(expected);
  });

  it('to return false with a negative number palindrome', () => {
    const testNumber = -7337;
    const expected = false;
    expect(isNumberPalindrome(testNumber)).toEqual(expected);
  });

});