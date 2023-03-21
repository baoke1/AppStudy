<template>
	<view class="recommend">
		
		
		<view class="recommend-item" v-for="(item,index) in dataList" :key="index">
			<image class="item-big" :src="item.bigUrl"></image>
			<view class="item-small" >
				<block v-for="(k,i) in item.data" :key="i">
					<image class="item-img" :src="k.imgUrl"></image>
				</block>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		props:{
			dataList:Array
		},
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
	background-color: #90d7ec;
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
