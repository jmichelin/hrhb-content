const express = require('express');
const router = express.Router();
const waterWallsCont = require('../controllers/executor.js').waterWallsCont;

router.get('/', (req, res, next) => {
  res.json('Send a POST to calculate!');
});

router.post('/', waterWallsCont['POST']);

module.exports.waterCalc = router;