<template>
	<view class="commodity-list">
		<commodity :dataList="dataList"></commodity>
	</view>
</template>

<script>
	import commodity from './Commodity.vue'
	export default {
		props:{
			dataList:Array
		},
		data() {
			return {
				
			}
		},
		components:{
			commodity
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
