<template>
	<view>
		
		<view class="shop-title f-color">
			
			<view class="shop-item">
				<view>价格</view>
				<view class="shop-icon">
					<view class="iconfont icon-shangjiantou up"></view>
					<view class="iconfont icon-xiajiantou down"></view>
				</view>
			</view>
			
			<view class="shop-item">
				<view>折扣</view>
				<view class="shop-icon">
					<view class="iconfont icon-shangjiantou up"></view>
					<view class="iconfont icon-xiajiantou down"></view>
				</view>
			</view>
			
			<view class="shop-item">
				<view>品牌</view>
				<view class="shop-icon">
					<view class="iconfont icon-shangjiantou up"></view>
					<view class="iconfont icon-xiajiantou down"></view>
				</view>
			</view>
			
		</view>
		<Lines></Lines>
		<CommodityList :dataList="dataList"></CommodityList>
		<!-- :dataList="  " -->
	</view>
</template>

<script>
	import Lines from '../common/Lines.vue'
	import CommodityList from '../../components/common/CommodityList.vue'
	export default {
		data() {
			return {
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
				]
			}
		},
		components:{
			Lines,
			CommodityList
		},
		methods: {
			
		}
	}
</script>

<style>
.shop-title{
	display: flex;
}
	
.shop-item{
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80rpx;
}
.shop-icon{
	position: relative;
	margin-left: 10rpx;
}
.iconfont{
	width:16rpx;
	height:8rpx;
	position: absolute;
	left: 0;
}
.up{
	top:-22rpx;
}
.down{
	top:-7rpx;
}
</style>
