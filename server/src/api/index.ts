var express = require('express');
const router = express.Router();

const CodeGen = require('../generator/codeGenerator');

router.post('/generate', (req, res, next) => {
  console.log('called generate api', req.body);

  const gen = new CodeGen();
  gen.init();
  res.json({
    src: gen.getAsText(),
  });
});

module.exports = router;
