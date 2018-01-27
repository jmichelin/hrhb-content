const buildTable = (height) => {
  document.getElementById('container').innerHTML = "";
  for (let i = 0; i < height.length; i++) {
    let div = document.createElement('div');
    div.style.position = 'fixed';
    div.style.width = `${(100) + 'px'}`;
    div.style.float = 'left';
    div.style.left = `${(i * 100) + 'px'}`;
    div.style.height = `${(height[i] * 100) + 'px'}`;
    div.style.bottom = '0px';
    div.style.background = 'red';
    div.style.color = 'white';
    div.style.borderColor = 'black';
    div.style.borderStyle = 'solid';
    div.style.zIndex = '2';
    div.innerHTML = 'wall';

    document.getElementById('container').appendChild(div);
  }
};

const revealWater = (obj) => {
  let startH = obj.waterArea.startHeight;
  let endH = obj.waterArea.endHeight;
  let widthCalc = obj.waterArea.end - obj.waterArea.start;
  let heightCalc = heightComparer([startH, endH]);
  let water = document.createElement('div');
  let span = document.createElement('span');
  let answer = document.createTextNode(obj.waterArea.maxW.toString() + ' units is the max water area');
  document.getElementById('answer').innerHTML = "";
  span.style.color = "blue";
  span.appendChild(answer);
  document.getElementById('answer').appendChild(span);
  water.style.position = 'absolute';
  water.style.marginTop = '0px';
  water.style.bottom = '0px';
  water.style.zIndex = '1';
  water.style.left = `${(obj.waterArea.start * 100) + 'px'}`;
  water.style.width = `${(100 * widthCalc) + 'px'}`;
  water.style.height = `${(heightCalc[0] * 100) + 'px'}`
  water.style.background = 'turquoise';
  document.getElementById('container').appendChild(water);
};

document.querySelector('#height').addEventListener('submit', (e) => {
  e.preventDefault();
  let rawInput = document.querySelector('input[type=input]').value;
  let convertedInput = { height: strNumConverter(rawInput) };
  buildTable(convertedInput.height);
  calculate(convertedInput).then((res) => {
    revealWater(res);
  });
});