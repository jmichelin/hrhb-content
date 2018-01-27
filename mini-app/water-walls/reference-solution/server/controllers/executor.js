const maxArea = require('../helpers/findWater.js');

const waterWallsCont = {
  'POST': (req, res) => {
    let inputHeight = req.body.height;
    let waterArea = maxArea(inputHeight);
    res.json({ 'waterArea': waterArea });
  }
};

module.exports.waterWallsCont = waterWallsCont;