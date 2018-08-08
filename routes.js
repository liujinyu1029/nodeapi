var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

router.get('/', function(req, res, next) {
  res.render('index', { title: '接口数据服务器',des:'提供一个静态的接口服务，里面都是自己编辑的假数据，给前' });
});


// router.use('/supplier/audit/qdetail',function(req, res, next){
// 	var resJson = fs.readFileSync(path.join(__dirname,'/data/qdetail.json'),'utf8');
// 	res.send(resJson+'');
// })
//获取供应商数据 续签页面
router.use('/supplier/delay/getSupplierFullInfo',function(req, res, next){
	var resJson = fs.readFileSync(path.join(__dirname,'/data/getSupplierFullInfo.json'),'utf8');
	res.send(resJson+'');
})
//获取供应商数据 审核页
router.use('/supplier/delay/getFlowFullInfo',function(req, res, next){
	var resJson = fs.readFileSync(path.join(__dirname,'/data/getFlowFullInfo.json'),'utf8');
	res.send(resJson+'');
})

//申报列表页 列表数据
router.use('/supplier/apply/list',function(req, res, next){
	var resJson = fs.readFileSync(path.join(__dirname,'/data/apply_list.json'),'utf8');
	res.send(resJson+'');
})

//审核列表页 列表数据
router.use('/supplier/audit/auditinglist',function(req, res, next){
	var resJson = fs.readFileSync(path.join(__dirname,'/data/auditinglist.json'),'utf8');
	res.send(resJson+'');
})

//账期天数列表
router.use('/public/listAccountDay',function(req, res, next){
	var resJson = fs.readFileSync(path.join(__dirname,'/data/listAccountDay.json'),'utf8');
	res.send(resJson+'');
})

//供应商产品库 新品竞标
router.use('/biddingSku/queryPageList',function(req, res, next){
	var resJson = fs.readFileSync(path.join(__dirname,'/data/queryPageList.json'),'utf8');
	res.send(resJson+'');
})
//提交信息
router.use('/submit',function(req, res, next){
	var resJson = fs.readFileSync(path.join(__dirname,'/data/submit.json'),'utf8');
	res.send(resJson+'');
	// setTimeout(function(){
	// 	res.send(resJson+'');
	// },2000)
})

//提交信息
router.use('/shopGoodsPrice/listMcToOnePriceAddPage',function(req, res, next){
	var resJson = fs.readFileSync(path.join(__dirname,'/data/listMcToOnePriceAddPage.json'),'utf8');
	res.send(resJson+'');
})
//提交信息
router.use('/shopGoodsPrice/listOneTwoAddPricePage',function(req, res, next){
	var resJson = fs.readFileSync(path.join(__dirname,'/data/listMcToOnePriceAddPage.json'),'utf8');
	res.send(resJson+'');
})
//提交信息
router.use('/shopGoodsPrice/listTwoThreePriceAddPage',function(req, res, next){
	var resJson = fs.readFileSync(path.join(__dirname,'/data/listMcToOnePriceAddPage.json'),'utf8');
	res.send(resJson+'');
})

router.use('/shopGoodsPrice/listMcToOnePricePage',function(req, res, next){
	var resJson = fs.readFileSync(path.join(__dirname,'/data/listMcToOnePricePage.json'),'utf8');
	res.send(resJson+'');
})

router.use('/shopGoodsPrice/getMcModifyPrice',function(req, res, next){
	var resJson = fs.readFileSync(path.join(__dirname,'/data/getMcModifyPrice.json'),'utf8');
	res.send(resJson+'');
})

router.use('/shopGoodsPrice/listPriceHistory',function(req, res, next){
	var resJson = fs.readFileSync(path.join(__dirname,'/data/listPriceHistory.json'),'utf8');
	res.send(resJson+'');
})

router.use('/dsShopTreeSource/dsShopTreeSource',function(req, res, next){
	var resJson = fs.readFileSync(path.join(__dirname,'/data/dsShopTreeSource.json'),'utf8');
	res.send(resJson+'');
})





module.exports = router;
