<template>
	<view>
		<view class="commodity" :style="'flex-wrap:'+wrap+';'">
			
			<view class="commodity-item" v-for="(item,index) in dataList" :key='index' :style="'width:'+itemW+';'">
				<image class="commodity-img" :src="item.imgurl" :style="'height:'+bigH+';'"></image>
				<view class="commodity-context">
					<text class="commodity-name" :style="'font-size:'+nameSize+';'">
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
			dataList: Array,
			itemW:{
				type:String,
				default:"375rpx"
			},
			bigH:{
				type:String,
				default:"375rpx"
			},
			wrap:{
				type:String,
				default:"wrap"
			},
			nameSize:{
				type:String,
				dafault:"26rpx"
			}
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
}
.commodity-item{
	padding-bottom: 20rpx;
}
.commodity-img{
	width:100%;
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
