const longestCommonPrefix = require('./02-impl-revision');

describe('addIntegerLists', () => {
  it('given empty array, [] return ""', () => {

    const arrayOfStrings = [];

    const expected = '';

    expect(longestCommonPrefix(arrayOfStrings)).toEqual(expected);
  });

  it('given array, ["aaabb", "aabb", "xaacc"] return ""', () => {

    const arrayOfStrings = ["aaabb", "aabb", "xaacc"];

    const expected = '';

    expect(longestCommonPrefix(arrayOfStrings)).toEqual(expected);
  });

  it('given array, ["aaabb", "aabb", "aacc"] return "aa"', () => {

    const arrayOfStrings = ["aaabb", "aabb", "aacc"];

    const expected = 'aa';

    expect(longestCommonPrefix(arrayOfStrings)).toEqual(expected);
  });
});
