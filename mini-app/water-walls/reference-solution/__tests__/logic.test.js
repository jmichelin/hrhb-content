const maxArea = require('../server/helpers/find-water.js');

test('maxArea func succesfully find the most water between two towers', () => {
  expect(maxArea([7, 2, 5, 3, 6, 4]).maxW).toBe(24)
});

test('maxArea func finds the two poles that contain the maxWater', () => {
  let answer = maxArea([7, 2, 5, 3, 6, 4]);
  let low = answer.start;
  let high = answer.end;
  expect([low, high]).toEqual([0, 4]);
});

test('maxArea func succesfully finds the most water with input [1,1]', () => {
  expect(maxArea([1, 1]).maxW).toBe(1);
});