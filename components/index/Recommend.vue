<template>
	<view class="recommend">
		<view class="recommend-item">
			<image class="item-big" src="../../static/img/right_2.png"></image>
			<view class="item-small">
				<image class="item-img" src="../../static/logo.png"></image>
				<image class="item-img" src="../../static/logo.png"></image>
				<image class="item-img" src="../../static/logo.png"></image>
			</view>
		</view>
		<view class="recommend-item">
			<image class="item-big" src="../../static/img/right_2.png"></image>
			<view class="item-small">
				<image class="item-img" src="../../static/logo.png"></image>
				<image class="item-img" src="../../static/logo.png"></image>
				<image class="item-img" src="../../static/logo.png"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.recommend{
	padding: 30rpx;
}
.recommend-item{
	display: flex;
	flex-direction: column;
	border-radius: 30rpx;
	border: 2rpx solid #cccccc;
	overflow: hidden;
	margin: 20rpx 0 ;
}
.item-big{
	width:110%;
	height:310rpx;
	left:-20rpx;
	top:-12rpx;
}
.item-small{
	width:100%;
	height:220rpx;
}
.item-img{
	top:-12rpx;
	width: 33.333%;
	height:240rpx;
}
</style>
