const containerWithMostWater = (height) => {
  let leftWall = 0;
  let rightWall = height.length - 1;
  let water = 0;
  const containerMap = {
    heightMap: height,
    largestContainer: [],
  };
  while (leftWall < rightWall) {
    water = Math.max(water, (rightWall - leftWall)*Math.min(height[leftWall], height[rightWall]));
    containerMap.largestContainer = [leftWall, rightWall, water];
    (height[leftWall] < height[rightWall]) ? leftWall++ : rightWall--;
  }
  return containerMap;
};

module.exports = containerWithMostWater;