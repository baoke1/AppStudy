<template>
	<view class="shop"> 
		<view class="shop-item">
			<image class="shop-bigimg" src="../../static/img/regCode.png" ></image>
			<scroll-view scroll-x="true" class="scroll-content">
				<view class="scroll-item">
					<Commodity :dateList="shopList" itemW='200rpx' bigH="200rpx" wrap="no-wrap" nameSize="15rpx"></Commodity>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import Commodity from'../common/Commodity.vue'
	export default {
		data() {
			return {
				shopList:[
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
			Commodity
		},
		methods: {
			
		}
	}
</script>

<style >
.shop-bigimg{
	width: 100%;
	height: 350rpx;
	display: block;
}
.scroll-content{
	width: 100%;
	white-space: nowrap;
}
.scroll-item{
	display: inline-block;
}
</style>
