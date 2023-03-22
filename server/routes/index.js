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

//首页第1次触底的数据
router.get('/api/index_list/1/data/2', function(req, res, next) {
  res.json({
		code:'0',
		data:[
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
	});
});

//运动户外第二次触底的数据
router.get('/api/index_list/2/data/3', function(req, res, next) {
  res.json({
		code:'0',
		data:[
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
				],
			}
		]
	});
});

//运动户外第一次触底的数据
router.get('/api/index_list/2/data/2', function(req, res, next) {
  res.json({
		code:'0',
		data:[
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
	});
});


//运动的加载数据
router.get('/api/index_list/2/data/1', function(req, res, next) {
  res.json({
		code:'0' ,
		data: [
			{
				type:"bannerList",
				imgUrl:"../../static/img/local-banner.png"
			},
			{
				type: "iconsList",
				data:[
					{imgUrl:"../../static/img/left_1.png" ,name: "运动户外" },
					{imgUrl:"../../static/img/left_1.png" ,name: "运动户外" },
					{imgUrl:"../../static/img/left_1.png" ,name: "运动户外" },
					{imgUrl:"../../static/img/left_1.png" ,name: "运动户外" },
					{imgUrl:"../../static/img/left_1.png" ,name: "运动户外" },
					{imgUrl:"../../static/img/left_1.png" ,name: "运动户外" },
					{imgUrl:"../../static/img/left_1.png" ,name: "运动户外" },
					{imgUrl:"../../static/img/left_1.png" ,name: "运动户外" },
				]
			},
			{
				type: "hotList",
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
			},
			{
				type:"shopList",
				data:[
					{
						bigUrl:"../../static/img/regCode.png",
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
					},
					{
						bigUrl:"../../static/img/regCode.png",
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
		
	});
});


//服饰内衣加载的数据
router.get('/api/index_list/3/data/1', function(req, res, next) {
  res.json({
		code:'0' ,
		data: [
			{
				type:"bannerList",
				imgUrl:"../../static/img/local-banner.png"
			},
			{
				type: "iconsList",
				data:[
					{imgUrl:"../../static/img/left_1.png" ,name: "服饰内衣" },
					{imgUrl:"../../static/img/left_1.png" ,name: "服饰内衣" },
					{imgUrl:"../../static/img/left_1.png" ,name: "服饰内衣" },
					{imgUrl:"../../static/img/left_1.png" ,name: "服饰内衣" },
					{imgUrl:"../../static/img/left_1.png" ,name: "服饰内衣" },
					{imgUrl:"../../static/img/left_1.png" ,name: "服饰内衣" },
					{imgUrl:"../../static/img/left_1.png" ,name: "服饰内衣" },
					{imgUrl:"../../static/img/left_1.png" ,name: "服饰内衣" },
				]
			},
			{
				type: "hostList",
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
			},
			{
				type:"shopList",
				data:[
					{
						bigUrl:"../../static/img/regCode.png",
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
					},
					{
						bigUrl:"../../static/img/regCode.png",
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
		
	});
});


//首页数据
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
