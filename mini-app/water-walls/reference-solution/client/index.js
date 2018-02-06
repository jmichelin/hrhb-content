const buildTable = (height, obj) => {
  let wA = obj.waterArea;
  let widthCalc = wA.end - wA.start;
  let heightCalc = heightComparer([wA.startHeight, wA.endHeight]);
  document.getElementById('container').innerHTML = '';
  document.getElementById('answer').innerHTML = '';
  document.getElementById('container').style.width = `${(height.length + 1) * 50 + 55}` + 'px';

  // iterate for the height
  for (let i = 10; i > 0; i--) {
    for (let j = -1; j < height.length; j++) {
      let div = document.createElement('div');
      if (j === -1) {
        div.innerHTML = `${i}`;
      }
      if ((j >= wA.start && j <= wA.end) && i <= heightCalc[0]) {
        div.style.background = 'turquoise';
      }
      if (height[j] < height[j-1] && height[j] < height[j+1]) {
        let heightCheck = heightComparer([height[j-1], height[j+1]])[0];
        if (i <= heightCheck) {
          div.style.background = 'turquoise';
        }
      }
      if ((j >= 0 && j !== wA.start || j >= 0 && j !== wA.end) && i <= height[j]) {
        div.style.background = 'grey';
      }
      if (j === wA.start && i <= wA.startHeight || j === wA.end && i <= wA.endHeight) {
        div.style.background = 'black';
      }
      div.style.float = 'left';
      div.style.width = '50px';
      div.style.height = '50px';
      div.style.borderStyle = 'solid';
      div.style.borderColor = 'black';
      document.getElementById('container').appendChild(div);
    }
  }
}

document.querySelector('#height').addEventListener('submit', (e) => {
  e.preventDefault();
  let rawInput = document.querySelector('input[type=input]').value;
  let convertedInput = { height: strNumConverter(rawInput) };
  document.querySelector('input[type=input]').value = '';
  calculate(convertedInput).then((res) => {
    buildTable(convertedInput.height, res);
  });
});