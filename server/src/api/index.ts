var express = require('express');
const router = express.Router();

// const CodeGen = require('../generator/codeGen');

router.get('/get', (req, res, next) => {
  console.log('called get api');

  // const gen = new CodeGen();
  // res.json({
  //   src: gen.getAsText(),
  // });
});

module.exports = router;
