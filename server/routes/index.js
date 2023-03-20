var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});
router.get("/api/index_list/data",function(req, res, next){
	res.send({
		"code":'0' ,
		"data": {
			topBar:[
				{id:1 ,name: "推荐"},
				{id:2 ,name: "户外运动"},
				{id:3 ,name: "服饰内衣"},
				{id:4 ,name: "鞋靴箱包"},
				{id:5 ,name: "美妆个护"},
				{id:6 ,name: "家具数码"},
				{id:7 ,name: "食品母婴"}
			],
			data:[
				{
					type: "swiperList",
					data:[
						{imgUrl: "../../static/img/regCode.png"},
						{imgUrl: "../../static/img/local-banner.png"},
						{imgUrl: "../../static/img/left_1.png"}
					]
				},
				{
					type: "recommendList",
					data:[
						{
							bigUrl: "../../static/img/right_2.png",
							data:[
								{imgUrl:"../../static/logo.png"},
								{imgUrl:"../../static/logo.png"},
								{imgUrl:"../../static/logo.png"}
							]					
						},
					]
				},
				{
					type: "commodityList",
					data:[
						{
							id: 1,
							imgurl:"../../static/img/local-banner.png",
							name:"爆款珍惜极限商品，你值得拥有",
							pprice:"299",
							oprice:"659",
							discount:"5.2"
						},
						{
							id: 2,
							imgurl:"../../static/img/local-banner.png",
							name:"爆款珍惜极限商品，你值得拥有",
							pprice:"299",
							oprice:"659",
							discount:"5.2"
						},
						{
							id: 3,
							imgurl:"../../static/img/local-banner.png",
							name:"爆款珍惜极限商品，你值得拥有",
							pprice:"299",
							oprice:"659",
							discount:"5.2"
						},
						{
							id: 4,
							imgurl:"../../static/img/local-banner.png",
							name:"爆款珍惜极限商品，你值得拥有",
							pprice:"299",
							oprice:"659",
							discount:"5.2"
						},
					]
				}
			]

		},
		
	});
});

module.exports = router;
