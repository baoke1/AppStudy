<template>
	<view class="hot">
		<Commodity :dataList="dataList" itemW='250rpx' bigH="250rpx"></Commodity>
	</view>
</template>

<script>
	import Commodity from '../common/Commodity.vue'
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

<style>

</style>
