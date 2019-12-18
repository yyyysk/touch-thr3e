var express = require('express');
const router = express.Router();

const CodeGen = require('../generator/codeGenerator');

router.get('/get', (req, res, next) => {
  console.log('called get api');

  const gen = new CodeGen();
  gen.init();
  res.json({
    src: gen.getAsText(),
  });
});

module.exports = router;
