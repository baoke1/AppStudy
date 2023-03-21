<template>
	<view class="icons">
		<view class="icons-item" v-for="(item,index) in dataList" :key="index">
			<image class="icons-img" :src="item.imgUrl"></image>
			<text class="icons-name" >{{item.name}}</text>
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

<style scoped>
.icons{
	 display: flex;
	 flex-wrap: wrap;
}
.icons-item{
	width:25%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top:20rpx;
}
.icons-img{
	width: 120rpx;
	height: 110rpx;
	
}
.icons-name{
	width: 100rpx;
	height: 110rpx;
	font-size: 15rpx;
	text-align: center;
	color:#636263;
}
</style>
