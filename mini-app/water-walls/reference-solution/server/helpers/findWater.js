const maxArea = (height) => {
  if (!height) {
    return 0;
  };
  let start = 0;
  let end = height.length-1;
  let maxW = 0;
  let result = {};
  let temp;

  while (start < end) {
    temp = Math.max(Math.min(height[start], height[end]) * (end-start));
    if (temp > maxW) {
      maxW = temp;
      result.maxW = maxW;
      result.start = start;
      result.startHeight = height[start];
      result.end = end;
      result.endHeight = height[end];
    };
    if (height[start] < height[end]) {
      start++;
    } else {
      end--;
    }
  }
  return result;
};

module.exports = maxArea;