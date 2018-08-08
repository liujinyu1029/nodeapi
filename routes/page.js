var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('controlPage', { title: '接口服务器配置页',peo:{name:'liujinyu'} });
});


module.exports = router;
