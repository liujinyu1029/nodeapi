var express = require('express');
var router = express.Router();
var fs = require('fs');

// 设置路径 与 返回值
router.post('/setData', function(req, res, next) {
  var d = req.body;
  fs.writeFile('./config/storage.data', JSON.stringify(d), (err) => {
    if (err) {
      res.send({ret:0,msg:'配置数据存储失败'});
      return;
	};
    res.send({ret:1,msg:'配置数据存储成功'});
  });
});

// 获取 路径配置
router.get('/getData', function(req, res, next) {
	fs.readFile('./config/storage.data','utf8',function(err,data){
		if(err){
          res.send({ret:0,msg:'读取配置数据失败'});
          return;
		}
		try{
      var d = JSON.parse(data);
		}catch(e){
		  var d = [];
		}
      res.send({ret:1,data:JSON.parse(data),msg:'设置成功'});
	})
});

// 更改参数
router.post('/updateApiCont', function(req, res, next) {
  var d = req.body;
  var filterName = d.url.replace(/\//g,'_');
  if(!filterName){
    res.send({ret:0,msg:'接口路径为空'});
    return;
  }
  fs.writeFile('./data/'+filterName+'.json', d.data, (err) => {
    if (err) {
      res.send({ret:0,msg:'接口数据存储失败'});
      return;
    };
    res.send({ret:1,msg:'接口数据存储成功'});
  });
});




module.exports = router;
