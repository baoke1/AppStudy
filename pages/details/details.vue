<template>
	<view class="details">
		
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item" v-for="(item,index) in swiperList" :key='index'>
					<image :src="item.imgUrl" class="swiper-img"></image>
				</view>
			</swiper-item>
		</swiper>
		
		<view class="details-goods">
			<view class="goods-pprice">￥399</view>
			<view class="goods-oprice">￥599</view>
			<view class="goods-name">精品羽绒服清仓大甩卖</view>
		</view>
		 
		<view >
			<view><image class="details-img" src="../../static/img/regCode.png"></image></view>
			<view><image class="details-img" src="../../static/img/regCode.png"></image></view>
			<view><image class="details-img" src="../../static/img/regCode.png"></image></view>
			<view><image class="details-img" src="../../static/img/regCode.png"></image></view>
			<view><image class="details-img" src="../../static/img/regCode.png"></image></view>
		</view>
		
		<Card cardTitle="看了又看"></Card>
		<CommodityList :dataList="dataList"></CommodityList>
		
		<view class="details-foot">
			<view class="iconfont icon-xiaoxi"></view>
			<view class="iconfont icon-gouwuchekong"></view>
			<view class="add-shopcart" @tap="showPop">加入购物车</view>
			<view class="purchase" @tap="showPop">立即购买</view>
		</view>
		
		<view class="pop" v-show="isShow" @touchmove.stop.prevent=''>
			<view class="pop-mask" @tap="hidePop"></view>
			<view class="pop-box" :animation="animationData">
				<view>
					<image class="pop-img" src="../../static/img/regCode.png"></image>
				</view>
				<view class="pop-num">
					<view>购买数量</view>
					<uni-number-box min=1>
					</uni-number-box>
				</view>
				<view class="pop-sub">
					确定
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import UniNumberBox from '@/components/uni/uni-number-box/components/uni-number-box/uni-number-box.vue'
	import Card from '../../components/common/Card.vue'
	import CommodityList from '../../components/common/CommodityList.vue'
 	export default {
		data() {
			return {
				isShow:false,
				animationData:{},
				dataList:[
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
				swiperList:[
					{imgUrl:'../../static/img/local-banner.png'},
					{imgUrl:'../../static/img/left_1.png'},
					{imgUrl:'../../static/img/right_1.png'}
				]
			}
		},
		components:{
			Card,
			CommodityList,
			UniNumberBox
		},
		onLoad(e) {
			
		},
		onBackPress() {
			if(this.isShow===true){
				this.hidePop();
				return true;
			}
		},
		onNavigationBarButtonTap(e) {
			
			// if(e.type==='share'){
			// 	uni.share({
			// 		"provider":"weixin",
			// 		"type":0,
			// 		"scene":'WXSceneSession',
			// 		"title": this.goodsContent.name,
			// 		"href": "http://localhost:8081/#/pages/details/details?id=4"
			// 	})
			// }
		},
		methods: {
			showPop(){
				
				var animation = uni.createAnimation({
				      duration: 200,
				    })
				animation.translateY(2000).step();
				this.animationData=animation.export();
				setTimeout(()=>{
					animation.translateY(0).step();
					this.animationData=animation.export();
					this.isShow=true;
				},200)
			},
			hidePop(){
				
				var animation = uni.createAnimation({
				      duration: 200,
				    })
				setTimeout(()=>{
					animation.translateY(2000).step();
					this.animationData=animation.export();
				},2000)
				this.isShow=false;
			}
		}
	}
</script>

<style scoped>
	.details{
		padding-bottom: 90rpx;
	}
swiper{
	width:100%;
	height:700rpx;
}
.swiper-img{
	width:100%;
	height:700rpx;
}
.details-goods{
	text-align: center;
	font-weight: bold;
	font-size: 36rpx;
	padding: 10rpx 0;
}
.details-img{
	width:100%
}
.details-foot{
	position: fixed;
	left:0;
	bottom: 0;
	width: 100%;
	height: 90rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #FFFFFF;
}
.details-foot .iconfont{
	width:60rpx;
	height: 60rpx;
	border-radius: 100%;
	background-color: #000000;
	color: #FFFFFF;
	text-align: center;
	margin: 0 10rpx;
	line-height: 2;
}
.add-shopcart{
	margin: 0 40rpx;
	padding: 6rpx 30rpx;
	background-color: #000000;
	color: #fff;
	border-radius: 40rpx;
}
.purchase{
	margin: 0 40rpx;
	padding: 6rpx 30rpx;
	background-color: #49BDFB;
	color: #fff;
	border-radius: 40rpx;
}
.pop{
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 9999;
}
.pop-mask{
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.3);
}
.pop-box{
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 750rpx;
	background-color: #FFFFFF;
}
.pop-img{
	width: 260rpx;
	height: 260rpx;
}
.pop-sub{
	line-height:80rpx;
	background-color: #49BDFB;
	color: #FFFFFF;
	text-align: center;
	
}
.pop-num{
	padding: 20rpx;
	display: flex;
	
}
</style>
