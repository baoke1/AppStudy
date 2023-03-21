<template>
	<view class="shop"> 
		<view class="shop-item" v-for="(item,index) in dataList" :key="index">
			<image class="shop-bigimg" :src="item.bigUrl" ></image>
			<scroll-view scroll-x="true" class="scroll-content">
				<view class="scroll-item" >
					<Commodity :dataList="item.data" itemW='320rpx' bigH="200rpx" wrap="no-wrap" nameSize="15rpx"></Commodity>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import Commodity from'../common/Commodity.vue'
	export default {
		props:{
			dataList:Array
		},
		data() {
			return {
				
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
