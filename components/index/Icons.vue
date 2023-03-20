<template>
	<view class="icons">
		<view class="icons-item">
			<image class="icons-img" src="../../static/img/left_1.png"></image>
			<text class="icons-name">运动</text>
		</view>
		<view class="icons-item">
			<image class="icons-img" src="../../static/img/left_1.png"></image>
			<text class="icons-name">运动</text>
		</view>
		<view class="icons-item">
			<image class="icons-img" src="../../static/img/left_1.png"></image>
			<text class="icons-name">运动</text>
		</view>
		<view class="icons-item">
			<image class="icons-img" src="../../static/img/left_1.png"></image>
			<text class="icons-name">运动</text>
		</view>
		<view class="icons-item">
			<image class="icons-img" src="../../static/img/left_1.png"></image>
			<text class="icons-name">运动</text>
		</view>
		<view class="icons-item">
			<image class="icons-img" src="../../static/img/left_1.png"></image>
			<text class="icons-name">运动</text>
		</view>
		<view class="icons-item">
			<image class="icons-img" src="../../static/img/left_1.png"></image>
			<text class="icons-name">运动</text>
		</view>
		<view class="icons-item">
			<image class="icons-img" src="../../static/img/left_1.png"></image>
			<text class="icons-name">运动</text>
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

<style scoped>
.icons{
	 display: flex;
	 flex-wrap: wrap;
}
.icons-item{
	weight:25%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top:20rpx;
}
.icons-img{
	width: 130rpx;
	height: 110rpx;
	padding-left: 47rpx;
}
.icons-name{
	width: 110rpx;
	height: 110rpx;
	padding-left: 50%;
	color:#636263;
}
</style>
