const containerWithMostWater = require("./reference-solution");

describe('containerWithMostWater()', () => {

  it('containerWithMostWater should be defined', () => {
    expect(containerWithMostWater).toBeDefined();
  });

  it('should return 0 if one wall ', () => {
    const testArray = [1];
    containerWithMostWater(testArray);
    const expectedResult = { heightMap: [1], largestContainer: [] };
    expect(containerWithMostWater(testArray)).toEqual(expectedResult);
  });

  it('calculate first case that holds water ', () => {
    const testArray = [1, 1];
    containerWithMostWater(testArray);
    const expectedResult = { heightMap: [1, 1], largestContainer: [0, 1, 1] };
    expect(containerWithMostWater(testArray)).toEqual(expectedResult);
  });

  it('should account for 0 height walls in between', () => {
    const testArray = [1, 0, 1];
    containerWithMostWater(testArray);
    const expectedResult = { heightMap: [1, 0, 1], largestContainer: [0, 1, 2] };
    expect(containerWithMostWater(testArray)).toEqual(expectedResult);
  });

});
