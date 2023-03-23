<template>
	<view class="details">
		
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item" v-for="(item,index) in item " :key="index">
					<image :src="item.imgUrl" class="swiper-img"></image>
				</view>
			</swiper-item>
		</swiper>
		
		<view class="details-goods">
			<view class="goods-pprice">￥399</view>
			<view class="goods-oprice">￥599</view>
			<view class="goods-name">精品羽绒服清仓大甩卖</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperList:[
					{imgUrl:'../../static/img/local-banner.png'},
					{imgUrl:'../../static/img/local-banner.png'},
					{imgUrl:'../../static/img/local-banner.png'}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
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
</style>
