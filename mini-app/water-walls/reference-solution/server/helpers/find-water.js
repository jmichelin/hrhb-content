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
    let pole1 = height[start];
    let pole2 = height[end];
    temp = Math.max(Math.min(pole1, pole2) * (end-start));
    console.log(pole1, temp);
    if (temp >= maxW) {
      maxW = temp;
      result.maxW = maxW;
      result.start = start;
      result.startHeight = pole1;
      result.end = end;
      result.endHeight = pole2;
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