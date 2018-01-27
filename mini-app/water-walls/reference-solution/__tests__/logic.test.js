const maxArea = require('../server/helpers/findWater.js');

test('maxArea func succesfully find the most water between two towers', () => {
  expect(maxArea([7, 2, 5, 3, 6, 4])).toBe(24)
});

test('maxArea func succesfully finds the most water with input [1,1]', () => {
  expect(maxArea([1, 1])).toBe(1);
});