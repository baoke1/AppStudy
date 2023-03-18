<template>
	<view>
		<view class="commodity">
			
			<view class="commodity-item" v-for="(item,index) in dateList" :key='index'>
				<image class="commodity-img" :src="item.imgurl"></image>
				<view class="commodity-context">
					<text class="commodity-name">
						{{item.name}}
					</text>
					<view>
						<text class="pprice">￥{{item.pprice}}</text>
						<text class="oprice">￥{{item.oprice}}</text>
					</view>
					<text class="discount">{{item.discount}}折</text>
				</view>
			</view>
		
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			dateList: Array
		},
		data() {
			return {

			}
		},
		methods: {
			
		},
	}
</script>

<style>
.commodity{
	display: flex;
	flex-wrap: wrap;
}
.commodity-item{
	width:375rpx;
	padding-bottom: 20rpx;
}
.commodity-img{
	width:100%;
	height:375rpx;
}
.commodity-context{
	text-align: center;
}
.commodity-name{
	overflow:hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	color: #333333;
	word-break: break-all;
	padding:6rpx 20rpx;
}
.oprice{
	text-decoration: line-through;
	font-size: 24rpx;
	color: #999999;
}
.discount{
	border-radius: 4rpx;
	border: 1px solid #FF3333;
	padding: 2rpx 10rpx;
	font-size:20rpx;
	color:#FF3333;
}
</style>
