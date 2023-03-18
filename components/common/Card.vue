<template>
	<view class="card">
		<view>-</view>
		<slot class="card-name">{{cardTitle}}</slot>
		<view>-</view>
	</view>
</template>

<script>
	export default {
		props:{
			cardTitle:String
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.card{
	padding:20rpx 0;
	display: flex;
	justify-content: center;
	font-weight: bold;
}
.card-name{
	padding: 0 20rpx;
	font-size:32rpx;
}
</style>
