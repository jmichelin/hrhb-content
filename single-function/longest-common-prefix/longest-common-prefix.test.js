const longestCommonPrefix = require('./reference-solution.js');

describe('longestCommonPrefix', () => {
  it('given empty array, [] return ""', () => {
    const arrayOfStrings = [];
    const expected = "";
    expect(longestCommonPrefix(arrayOfStrings)).toEqual(expected);
  });

  it('given array, ["aaabb", "aabb", "xaacc"] return ""', () => {
    const arrayOfStrings = ["aaabb", "aabb", "xaacc"];
    const expected = "";
    expect(longestCommonPrefix(arrayOfStrings)).toEqual(expected);
  });

  it('given array, ["qqaaabb", "qqqqqqaabb", "qqqaacc"] return "aa"', () => {
    const arrayOfStrings = ["qqaaabb", "qqqqqqaabb", "qqqaacc"];
    const expected = "qq";
    expect(longestCommonPrefix(arrayOfStrings)).toEqual(expected);
  });
});
