var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.use('/*', function(req, res, next) {
  // var path = req.baseUrl.replace('/api','');
  var path = req.baseUrl;
  var filterName = path.replace(/\//g,'_');
console.log(222,'./data/'+filterName+'.json');
  var resJson = fs.readFile('./data/'+filterName+'.json','utf8',function(err,resJson){
    console.log(111,err)
    if(err){
      res.send({ret:0,msg:'服务器内暂无数据文件'});
      console.log(path.replace(/\//,''),{ret:0,msg:'服务器内暂无数据文件'})
      return
    }
    res.send(resJson+'');
    console.log(path.replace(/\//,''),resJson+'')
  });

});

module.exports = router;
