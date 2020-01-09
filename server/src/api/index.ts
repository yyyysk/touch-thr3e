var express = require('express');
const router = express.Router();

const CodeGen = require('../generator/codeGenerator');

/**
 * フロントから渡ってきたStoreの情報をもとに
 * Three.jsレンダリング用のソースコードを生成する
 */
router.post('/generate', (req, res, next) => {
  console.log('called generate api', req.body[0].data.size);

  const gen = new CodeGen();
  gen.setData(req.body).init();
  res.json({
    src: gen.getAsText(),
  });
});

module.exports = router;
