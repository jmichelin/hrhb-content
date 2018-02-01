const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const waterCalc = require('./routes/water-calc.js').waterCalc;
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/waterCalc', waterCalc);
app.use(express.static('client'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/index.html'));
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
});