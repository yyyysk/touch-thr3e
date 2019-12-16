var express = require('express');
var router = express.Router();

router.get('/get', (req, res, next) => {
  console.log('called get api');
});

module.exports = router;
